- [x] Need to figure out where forms sit, always child of task?
  TaskChildren? Both? Decide, then code.
  - [x] Markup planned but not quite implemented ye
    - [x] Item only gets an input for sub items if it doesn't already
          if it doesn't already have sub items
- [x] Sub tasks aren't creating correctly
  - [x] Why doesn't each sub task have its own new box?
    - [x] Because they lack a "children" array, 
       need to account for existence of empty array and no array
- [ ] Sub of sub gets attached to some new parent instead of existing
  - [ ] Creating a subtask will add that task as a child as well 
    as a root orphan
    - [ ] It's not that extra items are being created, rather, since
      they are all the same collection, the simple find() will return every task at the root of the top array as well as in the correct children spots.
      - [ ] Either need a new controller action to not return duplicate data, or somehow account for it on the client. Probabl the former is the best way to go, sounds like less tech debt.