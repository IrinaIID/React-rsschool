import * as jsxRuntime from "react/jsx-runtime";
import { Link, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch, Provider } from "react-redux";
import { createSlice, combineReducers, configureStore } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { createApi, fetchBaseQuery } from "s";
import "isomorphic-fetch";
import { useForm } from "react-hook-form";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const ROUTES = {
  main: "/",
  about: "/about",
  forms: "/forms"
};
const App$1 = "";
const entry = "";
const header = "";
function DecoratioHeader() {
  return /* @__PURE__ */ jsx("div", { className: "decoration-header-all", children: /* @__PURE__ */ jsx("div", { className: "decoration-block" }) });
}
function NavigationHeader() {
  return /* @__PURE__ */ jsxs("div", { className: "navigation-header-all", children: [
    /* @__PURE__ */ jsx("div", { className: "block-nav block-nav-main", children: /* @__PURE__ */ jsx(Link, { to: ROUTES.main, children: /* @__PURE__ */ jsx("p", { className: "p-link-nav", children: "main" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "block-nav block-nav-about", children: /* @__PURE__ */ jsx(Link, { to: ROUTES.about, children: /* @__PURE__ */ jsx("p", { className: "p-link-nav", children: "about us" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "forms-link-block", children: /* @__PURE__ */ jsx(Link, { to: ROUTES.forms, children: /* @__PURE__ */ jsx("p", { className: "p-link-nav p-link-nav-forms", children: "forms" }) }) })
  ] });
}
function Header() {
  return /* @__PURE__ */ jsx("div", { className: "header-all", children: /* @__PURE__ */ jsxs("div", { className: "header-container", children: [
    /* @__PURE__ */ jsx(NavigationHeader, {}),
    /* @__PURE__ */ jsx(DecoratioHeader, {})
  ] }) });
}
const footer = "";
function Footer() {
  return /* @__PURE__ */ jsx("div", { className: "footer-all", children: /* @__PURE__ */ jsxs("div", { className: "footer-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "my-info-block", children: [
      /* @__PURE__ */ jsx("a", { href: "https://github.com/IrinaIID", className: "link-my-github", children: "IrinaIID" }),
      /* @__PURE__ */ jsx("p", { className: "p-year", children: "2023" })
    ] }),
    /* @__PURE__ */ jsx("a", { href: "https://rs.school/react/", className: "link-course", children: "React course RS SChool" })
  ] }) });
}
const mainPage = "";
const searchForm = "";
const Search = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG0SURBVHgBpZVLTsMwEIb/cVvBCtjzyg3oDQg3KCcoNwA2iEcFQVAisaGcADgBcIJyhHKDqGxYpktA9TB20tCCE6L2l2w59vizxzOjEMa0FARLC7W5XWb4BNTNlLSYgR60fng7PbnHP6LRYLl9Xa9g+AiGV2AdfX5h6z04igqBFsbDbnojCPSWFXqsESniOpHaZOZGGWjVdPZmBibGCpXtqHXQG7N5kdZZu7zaE9qN8aBWxZ3MbbmAarUd7ozcVHJydDIBy9RvHXfk6vupW/7KReg7gYrRTF25jwreJoOKF8mXbjiBnEQTrPkZZaRh7RQpzwlEGggGxShHjBN7LOYBrQGx9lBCTJV1aw8MnEAySWtHqokSImLfgrV+cgI14SE90V+9uGoUwdba4dkoIypavTgPNN36ZdiVN/Fh3efzJEV+ZEuyOn8ma3vptk6/dbifC/SC0NM1dLOyk9Rgpifi4UDebJHAOxhVUbqeVy1ZLRso1+gmK7G/ik1JShib9uAcKP3eZSpAQt8gwkZiQbHk6KsafnSiIIgnvHFACVOoCDoVsAg6NTAPOhPQBZ0ZOA6VX0f0DVU5143B3sDjAAAAAElFTkSuQmCC";
const textInputSlice = createSlice({
  name: "textInput",
  initialState: {
    textInput: ""
  },
  reducers: {
    addTextFromInput(state, action) {
      state.textInput = action.payload;
    }
  }
});
const { addTextFromInput } = textInputSlice.actions;
const textInputReduser = textInputSlice.reducer;
const textQuerySlice = createSlice({
  name: "textQuery",
  initialState: {
    textQuery: ""
  },
  reducers: {
    addTextQuery(state, action) {
      state.textQuery = action.payload;
    }
  }
});
const { addTextQuery } = textQuerySlice.actions;
const textQuerySlice$1 = textQuerySlice.reducer;
function SearchForm() {
  const text = useSelector((state) => state.textInput.textInput);
  const dispatch = useDispatch();
  function handleChangeInput(e) {
    dispatch(addTextFromInput(e.currentTarget.value));
  }
  function handleClickBtn(e) {
    e.preventDefault();
    dispatch(addTextQuery(text));
  }
  return /* @__PURE__ */ jsxs("form", { className: "search-form-all", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        className: "input-search",
        value: text,
        onChange: (e) => handleChangeInput(e)
      }
    ) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { onClick: (e) => handleClickBtn(e), type: "submit", className: "search-btn", children: /* @__PURE__ */ jsx("img", { src: Search, alt: "search" }) }) })
  ] });
}
const apiCards = "";
function ApiCards({ isModal, numCard, picture, name, species, id }) {
  return /* @__PURE__ */ jsxs("div", { className: "card-all", children: [
    /* @__PURE__ */ jsx("div", { className: "img-card-block", children: /* @__PURE__ */ jsx("img", { src: picture, alt: "card", className: "img-item" }) }),
    /* @__PURE__ */ jsxs("div", { className: "description-card-block", children: [
      /* @__PURE__ */ jsxs("div", { className: "description-info", children: [
        /* @__PURE__ */ jsx("p", { className: "p-info", children: `name: ${name}` }),
        /* @__PURE__ */ jsx("p", { className: "p-info", children: `species: ${species}` })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "btn-card",
          onClick: () => {
            isModal(true);
            numCard(id);
          },
          children: "choose"
        }
      )
    ] })
  ] });
}
const modalCard = "";
const CloseImg = "data:image/webp;base64,UklGRoQBAABXRUJQVlA4WAoAAAAQAAAAGgAAGgAAQUxQSLQAAAABcBpJtlWtPPKGcCWSEI5ErkReiTwSdzczQvvDOy+DiJgAALDRyfY+04eCR5tWKeLDEpJoACzkFb9WKgygKjKrJhQRub7aoJpUNbqQLWekBeflD629FD54eWntg+8dQN+ZAe0dfRdSoH3bhSRs+4asvm97T+q7oL2ncBcA7Z5RHHeWD4yX35f5D0FXmnxUTaoabPUkqmBSTakiYCHWn6orDIBRUiztPUJaJ8NjGZzzB9JHAwBWUDggqgAAAPAEAJ0BKhsAGwA+USSPRSOiIRQFVDgFBLYATplwCjzygAU+ALNS61GlPWCkWvmQAAD+/pOVH/N2bpzNtdb75dCmJ6BaWOdwhfM78f/jO06hQLrX1LNJ4P7b3QHZfJF+A9v7fm9YVXalR7zD//5l3//N93//njrAUICD1tX91w5uHhvPXX/5v8PjrIQslaU5dm0q1/fmfXyF1EjM71Z1PrM7Ltf+AdpQAAAA";
const modalApi = createApi({
  reducerPath: "modalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/character"
  }),
  endpoints: (build) => ({
    getModalCard: build.query({
      query: (id) => `/${id}`
    })
  })
});
const { useGetModalCardQuery } = modalApi;
function ModalCard({ isModal, modalId }) {
  const { data = {}, isLoading } = useGetModalCardQuery(modalId);
  return /* @__PURE__ */ jsx("div", { className: "card-modal-all", onClick: () => isModal(false), children: /* @__PURE__ */ jsxs("div", { className: "card-modal", onClick: (e) => e.stopPropagation(), children: [
    isLoading && /* @__PURE__ */ jsx("p", { className: "p-loading", children: "Loading..." }),
    !isLoading && /* @__PURE__ */ jsxs("div", { children: [
      " ",
      /* @__PURE__ */ jsxs("div", { className: "modal-img-close-block", children: [
        /* @__PURE__ */ jsx("div", { className: "img-block", children: /* @__PURE__ */ jsx("img", { src: data == null ? void 0 : data.image, alt: "character", className: "img-modal" }) }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: CloseImg,
            alt: "close",
            className: "img-close",
            onClick: () => isModal(false)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "modal-description-block", children: [
        /* @__PURE__ */ jsxs("p", { className: "p-info", children: [
          "name: ",
          /* @__PURE__ */ jsx("span", { className: "span-info", children: data == null ? void 0 : data.name })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "p-info", children: [
          "status: ",
          /* @__PURE__ */ jsx("span", { className: "span-info", children: data == null ? void 0 : data.status })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "p-info", children: [
          "species: ",
          /* @__PURE__ */ jsx("span", { className: "span-info", children: data == null ? void 0 : data.species })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "p-info", children: [
          "type:",
          " ",
          /* @__PURE__ */ jsx("span", { className: "span-info", children: (data == null ? void 0 : data.type) === "" ? "unknown" : data == null ? void 0 : data.type })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "p-info", children: [
          "gender: ",
          /* @__PURE__ */ jsx("span", { className: "span-info", children: data == null ? void 0 : data.gender })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "p-info", children: [
          "origin: ",
          /* @__PURE__ */ jsx("span", { className: "span-info", children: data == null ? void 0 : data.origin.name })
        ] })
      ] }),
      " "
    ] })
  ] }) });
}
const cardsMainApi = createApi({
  reducerPath: "cardsMainApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/character" }),
  endpoints: (build) => ({
    getCardsMain: build.query({
      query: (text) => `?${text && `name=${text}`}`
    })
  })
});
const { useGetCardsMainQuery } = cardsMainApi;
function MainPage() {
  const textQuery = useSelector((state) => state.textQuery.textQuery);
  const { data = [], isLoading, error } = useGetCardsMainQuery(textQuery);
  const [isModal, setIsModal] = useState(false);
  const [numCard, setNumCard] = useState(0);
  return /* @__PURE__ */ jsxs("div", { className: "main-page-all", children: [
    isModal && /* @__PURE__ */ jsx(ModalCard, { isModal: setIsModal, modalId: numCard }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "main", children: [
      /* @__PURE__ */ jsx("div", { className: "search-block", children: /* @__PURE__ */ jsx(SearchForm, {}) }),
      /* @__PURE__ */ jsxs("div", { className: "cards-block", children: [
        isLoading && /* @__PURE__ */ jsx("p", { className: "p-loading", children: "Loading..." }),
        error && /* @__PURE__ */ jsx("p", { className: "p-no-results", children: "Not found" }),
        !error && data.results && data.results.map((card) => {
          return /* @__PURE__ */ jsx(
            ApiCards,
            {
              isModal: setIsModal,
              numCard: setNumCard,
              picture: card.image,
              name: card.name,
              species: card.species,
              id: card.id
            },
            card.id
          );
        })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const _404Page = "";
const ErrorImg = "/assets/error-img-e57a91c3.webp";
function Page404() {
  return /* @__PURE__ */ jsx("div", { className: "page-404-all", children: /* @__PURE__ */ jsxs("div", { className: "error-block", children: [
    /* @__PURE__ */ jsx("h1", { className: "h1-404", children: "404" }),
    /* @__PURE__ */ jsx("img", { src: ErrorImg, className: "img-404", alt: "error" }),
    /* @__PURE__ */ jsxs("div", { className: "return-links-block", children: [
      /* @__PURE__ */ jsx("p", { className: "p-404", children: "return to" }),
      /* @__PURE__ */ jsx(Link, { to: ROUTES.main, children: "main" }),
      /* @__PURE__ */ jsx(Link, { to: ROUTES.about, children: "about" }),
      /* @__PURE__ */ jsx(Link, { to: ROUTES.forms, children: "forms" })
    ] })
  ] }) });
}
const aboutPage = "";
function AboutPage() {
  return /* @__PURE__ */ jsxs("div", { className: "page-about-all", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("div", { className: "about-main-block", children: /* @__PURE__ */ jsxs("div", { className: "main-container-about", children: [
      /* @__PURE__ */ jsx("h1", { className: "h1-about", children: "About page" }),
      /* @__PURE__ */ jsx("p", { className: "p-about", children: "About page for the RS-project / course React" })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const formsPage = "";
const visitorCard = "";
function VisitorCard(props) {
  return /* @__PURE__ */ jsxs("div", { className: "visitor-card-all", children: [
    /* @__PURE__ */ jsx("div", { className: "img-card-block", children: /* @__PURE__ */ jsx("img", { src: props.picture, alt: "card", className: "img-visitor-card" }) }),
    /* @__PURE__ */ jsx("div", { className: "description-card-block", children: /* @__PURE__ */ jsxs("div", { className: "description-info", children: [
      /* @__PURE__ */ jsxs("p", { className: "p-info", children: [
        "name: ",
        props.name
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "p-info", children: [
        "gender: ",
        props.gender
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "p-info", children: [
        "status: ",
        props.status
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "p-info", children: [
        "date: ",
        props.date
      ] }),
      /* @__PURE__ */ jsx("p", { className: "p-info p-info-public", children: props.public })
    ] }) })
  ] });
}
const createForm = "";
const cardObj = [];
const cardsFormSlice = createSlice({
  name: "cardsForm",
  initialState: {
    cardsForm: cardObj
  },
  reducers: {
    addCardForm(state, action) {
      state.cardsForm.push(action.payload);
    }
  }
});
const { addCardForm } = cardsFormSlice.actions;
const cardsFormReducer = cardsFormSlice.reducer;
function CreateForm() {
  var _a, _b, _c, _d;
  const arrCards = useSelector((state) => state.cardsFrom.cardsForm);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [picture, setPicture] = useState("");
  const onSubmit = handleSubmit((data) => {
    const card = {
      name: data.name,
      date: data.date,
      status: data.status,
      public: data.public,
      gender: data.gender,
      file: picture,
      id: Math.random()
    };
    dispatch(addCardForm(card));
    reset();
    alert("Card created successfully");
  });
  return /* @__PURE__ */ jsxs("div", { className: "form-page-all", onSubmit, children: [
    /* @__PURE__ */ jsxs("form", { className: "all-form", children: [
      /* @__PURE__ */ jsx("h1", { className: "h1-form", children: "Create visitor card" }),
      /* @__PURE__ */ jsxs("label", { className: "label-form", children: [
        "Name:",
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: errors.name ? "input-name-error" : "input-name",
            ...register("name", {
              required: "This is required",
              minLength: { value: 4, message: "Min length is 4" }
            }),
            autoComplete: "off"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "p-input-error", children: (_a = errors.name) == null ? void 0 : _a.message })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "label-form", children: [
        "Date of card creation:",
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "date",
            className: errors.date ? "input-date-error" : "input-date",
            ...register("date", { required: "This is required" })
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "p-input-error", children: (_b = errors.date) == null ? void 0 : _b.message })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "label-form", children: [
        "Status",
        /* @__PURE__ */ jsxs(
          "select",
          {
            className: "input-select",
            ...register("status", { required: "This is required" }),
            children: [
              /* @__PURE__ */ jsx("option", { value: "administrator", children: "administrator" }),
              /* @__PURE__ */ jsx("option", { value: "authorized-person", children: "authorized person" }),
              /* @__PURE__ */ jsx("option", { value: "guest-with-invitation", children: "guest with invitation" }),
              /* @__PURE__ */ jsx("option", { value: "guest-without-invitation", children: "guest without invitation" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "label-check", children: [
        "For public view",
        /* @__PURE__ */ jsx("input", { className: "input-check", type: "checkbox", ...register("public") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "radio-block", children: [
        /* @__PURE__ */ jsxs("label", { className: "label-radio", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              value: "male",
              ...register("gender", { required: "This is required" })
            }
          ),
          "male"
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "label-radio", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              value: "female",
              ...register("gender", { required: "This is required" })
            }
          ),
          "female"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "p-input-error", children: (_c = errors.gender) == null ? void 0 : _c.message })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "label-form", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "file",
            className: "input-file",
            accept: ".png,.jpg,.webp",
            value: void 0,
            ...register("picture", { required: "This is required" }),
            onChange: (e) => {
              if (e.target.files && e.target.files[0]) {
                const path = window.URL.createObjectURL(e.target.files[0]);
                setPicture(path);
              }
            }
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "p-input-error", children: (_d = errors.picture) == null ? void 0 : _d.message })
      ] }),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "btn-create", children: "Create" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "visitors-cards-block", children: arrCards.map((card) => {
      return /* @__PURE__ */ jsx(
        VisitorCard,
        {
          name: card.name,
          date: card.date,
          status: card.status,
          gender: card.gender,
          public: card.public ? "for public view" : "",
          picture: card.file
        },
        card.id
      );
    }) })
  ] });
}
function FormsPage() {
  return /* @__PURE__ */ jsxs("div", { className: "forms-page-all", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("div", { className: "main-forms", children: /* @__PURE__ */ jsx(CreateForm, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const rootReducer = combineReducers({
  textInput: textInputReduser,
  textQuery: textQuerySlice$1,
  cardsFrom: cardsFormReducer,
  cardsMainApi: cardsMainApi.reducer,
  modalApi: modalApi.reducer
});
function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(cardsMainApi.middleware, modalApi.middleware),
    devTools: process.env.NODE_ENV !== "production"
  });
}
const store = setupStore();
function App() {
  return /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(MainPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: ROUTES.about, element: /* @__PURE__ */ jsx(AboutPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: ROUTES.forms, element: /* @__PURE__ */ jsx(FormsPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Page404, {}) })
  ] }) });
}
function render({ url }) {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) }) })
  );
  return { html };
}
export {
  render
};
