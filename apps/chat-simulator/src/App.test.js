import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders URL input", () => {
  render(<App />);
  const urlInputElement = screen.getByPlaceholderText(
    /Type the URL of a chat transcript and hit ENTER/i
  );
  expect(urlInputElement).toBeInTheDocument();
});

test("renders chat replay title bar", () => {
  render(<App />);
  const chatBoxTitle = screen.getByText(/Chat Replay/i);
  expect(chatBoxTitle).toBeInTheDocument();
});

test("renders chat messages box", () => {
  render(<App />);
  const chatBox = screen.getByTestId("message-list");
  expect(chatBox).toBeInTheDocument();
});

test("returns chat replay messages", async () => {
  render(<App />);
  const input = screen.getByTestId("message-input");
  expect(input).not.toBe(null);

  const testURL = "http://localhost:6400/chat/2";
  fireEvent.change(input, { target: { value: testURL } });
  expect(input).toHaveValue(testURL);

  input.focus();
  userEvent.keyboard("{enter}");

  const messageReplay = await screen.findByText("Hello!");
  expect(messageReplay).toBeInTheDocument();
});
