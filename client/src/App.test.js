import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    screen.debug();
  });
  test("should render the title", () => {
    render(<App />);
    const title = screen.getByText(/File Storage Service/i);
    expect(title).toBeInTheDocument();
  });
});

describe("Fetching", () => {
  test("should be able to fetch files", async () => {
    const { getByTestId } = render(<App />);
    const listNode = await waitFor(() => getByTestId("FileList"));
    expect(listNode).toBeInTheDocument();
  });
});

describe("Uploading", () => {
  test("should have a hidden file input element", async () => {
    render(<App />);
    const hiddenInput = screen.getByTestId("hidden-input");
    expect(hiddenInput).toBeInTheDocument();
  });
  test("should have a upload button", async () => {
    render(<App />);
    const uploadButton = screen.getByText(/UPLOAD/i);
    expect(uploadButton).toBeInTheDocument();
  });
});
