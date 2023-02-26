

- **Attribute selector**: Selects all elements with a specific HTML attribute set to a specific value. These are surrounded by [] and use a = as a delimiter between the attribute name and value. For example, [type="submit"] would select all elements with a type attribute set to "submit".

Excluding the value will select all elements with the attribute set to any value. For example, [type] would select all elements with the type attribute set, regardless of the value.

Attribute selectors can also use special syntax for basic pattern matching within the value. There are a variety of options here, but these are some of the more common ones:

- [href*="algoexpert.io"] would select all elements with an href attribute with the text "algoexpert.io" at any location.

- [href$="algoexpert.io"] would select all elements with an href attribute with the text "algoexpert.io" at the end of the value.

- [href^="https://algoexpert.io"] would select all elements with an href attribute with the text "https://algoexpert.io" at the beginning of the value.

- **Combinator**: Combines multiple selectors to select elements based on their location in the DOM. There are a few types of combinators:

- **Descendant combinator**: Represented by a single space, in the format selector1 selector2. Selects all elements that match selector2 and are a descendant of an element matching selector1. A descendant does not need to be a direct child (e.g. the selected element's grandparent could match selector1).

- **Child combinator**: Represented by >, in the format selector1 > selector2. Selects all elements that match selector2 and are a direct child of an element matching selector1.

- **Sibling combinator**: Represented by ~, in the format selector1 ~ selector2. Selects all elements that match selector2 and are a sibling of an element matching selector1. The element matching selector2 must come after the element matching selector1.

- **Adjacent sibling combinator**: Represented by +, in the format selector1 + selector2. Selects all elements that match selector2 and have an element matching selector1 directly before them in the DOM.