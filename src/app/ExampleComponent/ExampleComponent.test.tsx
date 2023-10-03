import { render, screen } from "@testing-library/react";
import { ExampleComponent } from ".";

describe("<ExampleComponent />", () => {
	test("renders", () => {
		render(<ExampleComponent />);
	});
});
