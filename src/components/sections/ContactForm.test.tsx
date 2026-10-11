import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "./ContactForm";

/** Fills the three visible fields with valid values. */
async function fillForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Ad Soyad"), "Test Kişi");
  await user.type(screen.getByLabelText("E-posta"), "test@example.com");
  await user.type(screen.getByLabelText("Mesaj"), "Merhaba, bu bir deneme mesajıdır.");
}

describe("ContactForm", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("sends the fields with the access key and shows a success message", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) });
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    render(<ContactForm accessKey="test-key" />);

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: "Gönder" }));

    await waitFor(() => expect(screen.getByText(/Mesajınız iletildi/)).toBeInTheDocument());
    const body = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body).toMatchObject({
      access_key: "test-key",
      name: "Test Kişi",
      email: "test@example.com",
      botcheck: false,
    });
  });

  it("shows an error message when the service rejects the message", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, json: async () => ({ success: false }) }));
    const user = userEvent.setup();
    render(<ContactForm accessKey="test-key" />);

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: "Gönder" }));

    await waitFor(() => expect(screen.getByText(/Mesaj gönderilemedi/)).toBeInTheDocument());
  });

  it("shows an error message when the network request fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    const user = userEvent.setup();
    render(<ContactForm accessKey="test-key" />);

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: "Gönder" }));

    await waitFor(() => expect(screen.getByText(/Mesaj gönderilemedi/)).toBeInTheDocument());
  });
});
