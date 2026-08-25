## Project Description
This is a React + TypeScript + Vite application in frontend.

## Project Structure
**Description:** I am using this structure, Here is an example of the code structure:
**FrontEnd:**
src/
- features/
  - [feature-name]/
    - components/   (reusable UI components for this feature)
    - services/     (API calls or business logic)
    - utils/        (helper functions)
    - constants/    (constants used in this feature like (CACHE_TIME, COLOR_FOR_FEATURE, NUMBER_OF_ITEMS_PER_PAGE, ....))
    - styles/       (SomeTime we need CSS styles for this feature. if tailwind is not enough)
- pages/            (page-level components)
- global/           (global contexts and types)
  - types/          (global TypeScript types)
  - context/        (global React context)
- types/            (global TypeScript types)


## Backend
**no backend here**

## Plans:
- Keep plans extremely concise. Prioritize brevity and clarity over complete sentences.
- At the end of each plan, list unresolved questions that require user input. If none, write "None."

## Strict Rules
- **Styling:**
  - Use Tailwind CSS or a similar utility-first CSS framework.
- **Notification:**
  - I use **react-hot-toast**
- **Keep Logic Safe:** Do not change core app logic, behavior, or database columns.
- **Error Handling:** 
  - use try/catch for error handling.
  - display a simple message to the user in case of an error.
- **Simplicity & Clean Code:** 
  - **Keep The code simple and maintanble**
  - Keep files small (under 300 lines).
  - Separate UI code (what it looks like) from logic (what it does).
  - Avoid code duplication. Write reusable components.
- **Performance Best Practices:**
  - Lazy-load pages: Don't load every page when the application starts.
  - Avoid unnecessary re-renders. Use `React.memo`, `useMemo`, or `useCallback` when a component handles heavy data or lists.
  - Use lazy loading for heavy page components.
  - Use useCallback when passing functions to memoized components
  - Virtualize large lists
  - Don't fetch unnecessary data
  - Use pagination in fetching large lists and data.
  - Cache API requests using `useQuery` or `useMutation`.
  - Use `React.memo` and `useMemo` to avoid unnecessary re-renders.
- **No New Libraries:** Do not install any new third-party packages.
- **Do not Hardcode:**
  - Do not hardcode values or strings in the code. Use environment variables or configuration files instead.
- **If you don't know how to do something, ask for help**
