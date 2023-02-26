Some interesting tidbits

https://vuex.vuejs.org/guide/getters.html#what-is-a-state-management-pattern

> It is a self-contained app with the following parts:

-   The **state**, the source of truth that drives our app; ^b0a65a
-   The **view**, a declarative mapping of the **state**;
-   The **actions**, the possible ways the state could change in reaction to user inputs from the **view**.

This is a simple representation of the concept of "one way data flow", [[1 - Web Dev/Two-Way Data Binding#What is Two-Way Data binding|the opposite of which is 2-way data binding]]

![](public/images/flow.png)

<div style="text-align: center;"><small><em><a href="https://vuex.vuejs.org/guide/getters.html#what-is-a-state-management-pattern">From the Vuex Docs</a></small></em></div>


However, the simplicity quickly breaks down when we have **multiple components that share a common state**:

-   Multiple views may depend on the same piece of state.
-   Actions from different views may need to mutate the same piece of state.

For problem one, [[1 - Web Dev/Prop Drilling#What is prop drilling|passing props can be tedious for deeply nested components, and simply doesn't work for sibling components]]. For problem two, we often find ourselves resorting to solutions such as reaching for direct parent/child instance references or trying to mutate and synchronize multiple copies of the state via events. Both of these patterns are brittle and quickly lead to unmaintainable code.