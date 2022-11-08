/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import List from '../pages/index';
import { render, screen } from "@testing-library/react";

describe("List of Cats", () => {
    it("renders a list of cats card", () => {
      render(<List />)
      // check if all components are rendered
      expect(screen.getByTestId("title")).toBeInTheDocument();
      expect(screen.getByTestId("order")).toBeInTheDocument();
      expect(screen.getByTestId("cards")).toBeInTheDocument();
      expect(screen.getByTestId("pagination")).toBeInTheDocument();
    });
  });