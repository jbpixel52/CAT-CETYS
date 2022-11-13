"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].tsx":
/*!**********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].tsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _env_server_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../env/server.mjs */ \"(api)/./src/env/server.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_server_mjs__WEBPACK_IMPORTED_MODULE_2__]);\n_env_server_mjs__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n // Prisma adapter for NextAuth, optional and can be removed\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0___default()({\n            clientId: _env_server_mjs__WEBPACK_IMPORTED_MODULE_2__.env.GOOGLE_CLIENT_ID,\n            clientSecret: _env_server_mjs__WEBPACK_IMPORTED_MODULE_2__.env.GOOGLE_CLIENT_SECRET\n        }), \n    ],\n    callbacks: {\n        async signIn ({ account , profile  }) {\n            if (account.provider === \"google\") {\n                return profile.email_verified && (profile?.email.endsWith(\"@cetys.edu.mx\") || profile.email.endsWith(\"@cetys.mx\"));\n            }\n            return true; // Do different verification for other providers that don't have `email_verified`\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ0csNERBQTJEO0FBQ3hFO0FBSTlDLE1BQU1HLFdBQVcsR0FBb0I7SUFDbkNDLFNBQVMsRUFBRTtRQUNUSixpRUFBYyxDQUFDO1lBQ2JLLFFBQVEsRUFBRUgsaUVBQW9CO1lBQzlCSyxZQUFZLEVBQUVMLHFFQUF3QjtTQUN2QyxDQUFDO0tBQ0g7SUFFRE8sU0FBUyxFQUFFO1FBQ1QsTUFBTUMsTUFBTSxFQUFDLEVBQUVDLE9BQU8sR0FBRUMsT0FBTyxHQUFFLEVBQUU7WUFDakMsSUFBSUQsT0FBTyxDQUFDRSxRQUFRLEtBQUssUUFBUSxFQUFFO2dCQUNqQyxPQUFPRCxPQUFPLENBQUNFLGNBQWMsSUFBSSxDQUFDRixPQUFPLEVBQUVHLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJSixPQUFPLENBQUNHLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDcEg7WUFDRCxPQUFPLElBQUksQ0FBQyxDQUFDLGlGQUFpRjtTQUMvRjtLQUNGO0NBRUY7QUFFRCxpRUFBZWYsZ0RBQVEsQ0FBQ0UsV0FBVyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXQvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50c3g/ZWEyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcbmltcG9ydCBOZXh0QXV0aCwgeyB0eXBlIE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjsvLyBQcmlzbWEgYWRhcHRlciBmb3IgTmV4dEF1dGgsIG9wdGlvbmFsIGFuZCBjYW4gYmUgcmVtb3ZlZFxyXG5pbXBvcnQgeyBlbnYgfSBmcm9tIFwiLi4vLi4vLi4vZW52L3NlcnZlci5tanNcIjtcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9kYi9jbGllbnRcIjtcclxuXHJcblxyXG5jb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogZW52LkdPT0dMRV9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgXSxcclxuXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBzaWduSW4oeyBhY2NvdW50LCBwcm9maWxlIH0pIHtcclxuICAgICAgaWYgKGFjY291bnQucHJvdmlkZXIgPT09IFwiZ29vZ2xlXCIpIHtcclxuICAgICAgICByZXR1cm4gcHJvZmlsZS5lbWFpbF92ZXJpZmllZCAmJiAocHJvZmlsZT8uZW1haWwuZW5kc1dpdGgoXCJAY2V0eXMuZWR1Lm14XCIpIHx8IHByb2ZpbGUuZW1haWwuZW5kc1dpdGgoXCJAY2V0eXMubXhcIikpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlOyAvLyBEbyBkaWZmZXJlbnQgdmVyaWZpY2F0aW9uIGZvciBvdGhlciBwcm92aWRlcnMgdGhhdCBkb24ndCBoYXZlIGBlbWFpbF92ZXJpZmllZGBcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcbiJdLCJuYW1lcyI6WyJHb29nbGVQcm92aWRlciIsIk5leHRBdXRoIiwiZW52IiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNpZ25JbiIsImFjY291bnQiLCJwcm9maWxlIiwicHJvdmlkZXIiLCJlbWFpbF92ZXJpZmllZCIsImVtYWlsIiwiZW5kc1dpdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].tsx\n");

/***/ }),

/***/ "(api)/./src/env/client.mjs":
/*!****************************!*\
  !*** ./src/env/client.mjs ***!
  \****************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"env\": () => (/* binding */ env),\n/* harmony export */   \"formatErrors\": () => (/* binding */ formatErrors)\n/* harmony export */ });\n/* harmony import */ var _schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema.mjs */ \"(api)/./src/env/schema.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schema_mjs__WEBPACK_IMPORTED_MODULE_0__]);\n_schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// @ts-check\n\nconst _clientEnv = _schema_mjs__WEBPACK_IMPORTED_MODULE_0__.clientSchema.safeParse(_schema_mjs__WEBPACK_IMPORTED_MODULE_0__.clientEnv);\nconst formatErrors = (/** @type {import('zod').ZodFormattedError<Map<string,string>,string>} */ errors)=>Object.entries(errors).map(([name, value])=>{\n        if (value && \"_errors\" in value) return `${name}: ${value._errors.join(\", \")}\\n`;\n    }).filter(Boolean);\nif (!_clientEnv.success) {\n    console.error(\"❌ Invalid environment variables:\\n\", ...formatErrors(_clientEnv.error.format()));\n    throw new Error(\"Invalid environment variables\");\n}\nfor (let key of Object.keys(_clientEnv.data)){\n    if (!key.startsWith(\"NEXT_PUBLIC_\")) {\n        console.warn(`❌ Invalid public environment variable name: ${key}. It must begin with 'NEXT_PUBLIC_'`);\n        throw new Error(\"Invalid public environment variable name\");\n    }\n}\nconst env = _clientEnv.data;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZW52L2NsaWVudC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsWUFBWTtBQUMyQztBQUV2RCxNQUFNRSxVQUFVLEdBQUdELCtEQUFzQixDQUFDRCxrREFBUyxDQUFDO0FBRTdDLE1BQU1JLFlBQVksR0FBRyxDQUMxQix1RUFBdUUsR0FDdkVDLE1BQU0sR0FFTkMsTUFBTSxDQUFDQyxPQUFPLENBQUNGLE1BQU0sQ0FBQyxDQUNuQkcsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxLQUFLLENBQUMsR0FBSztRQUN0QixJQUFJQSxLQUFLLElBQUksU0FBUyxJQUFJQSxLQUFLLEVBQzdCLE9BQU8sQ0FBQyxFQUFFRCxJQUFJLENBQUMsRUFBRSxFQUFFQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ25ELENBQUMsQ0FDREMsTUFBTSxDQUFDQyxPQUFPLENBQUMsQ0FBQztBQUVyQixJQUFJLENBQUNaLFVBQVUsQ0FBQ2EsT0FBTyxFQUFFO0lBQ3ZCQyxPQUFPLENBQUNDLEtBQUssQ0FDWCxvQ0FBb0MsS0FDakNiLFlBQVksQ0FBQ0YsVUFBVSxDQUFDZSxLQUFLLENBQUNDLE1BQU0sRUFBRSxDQUFDLENBQzNDLENBQUM7SUFDRixNQUFNLElBQUlDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0NBQ2xEO0FBRUQsS0FBSyxJQUFJQyxHQUFHLElBQUlkLE1BQU0sQ0FBQ2UsSUFBSSxDQUFDbkIsVUFBVSxDQUFDb0IsSUFBSSxDQUFDLENBQUU7SUFDNUMsSUFBSSxDQUFDRixHQUFHLENBQUNHLFVBQVUsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUNuQ1AsT0FBTyxDQUFDUSxJQUFJLENBQ1YsQ0FBQyw0Q0FBNEMsRUFBRUosR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQ3hGLENBQUM7UUFFRixNQUFNLElBQUlELEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0tBQzdEO0NBQ0Y7QUFFTSxNQUFNTSxHQUFHLEdBQUd2QixVQUFVLENBQUNvQixJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXQvLi9zcmMvZW52L2NsaWVudC5tanM/NjVhMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtY2hlY2tcclxuaW1wb3J0IHsgY2xpZW50RW52LCBjbGllbnRTY2hlbWEgfSBmcm9tIFwiLi9zY2hlbWEubWpzXCI7XHJcblxyXG5jb25zdCBfY2xpZW50RW52ID0gY2xpZW50U2NoZW1hLnNhZmVQYXJzZShjbGllbnRFbnYpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdEVycm9ycyA9IChcclxuICAvKiogQHR5cGUge2ltcG9ydCgnem9kJykuWm9kRm9ybWF0dGVkRXJyb3I8TWFwPHN0cmluZyxzdHJpbmc+LHN0cmluZz59ICovXHJcbiAgZXJyb3JzLFxyXG4pID0+XHJcbiAgT2JqZWN0LmVudHJpZXMoZXJyb3JzKVxyXG4gICAgLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4ge1xyXG4gICAgICBpZiAodmFsdWUgJiYgXCJfZXJyb3JzXCIgaW4gdmFsdWUpXHJcbiAgICAgICAgcmV0dXJuIGAke25hbWV9OiAke3ZhbHVlLl9lcnJvcnMuam9pbihcIiwgXCIpfVxcbmA7XHJcbiAgICB9KVxyXG4gICAgLmZpbHRlcihCb29sZWFuKTtcclxuXHJcbmlmICghX2NsaWVudEVudi5zdWNjZXNzKSB7XHJcbiAgY29uc29sZS5lcnJvcihcclxuICAgIFwi4p2MIEludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGVzOlxcblwiLFxyXG4gICAgLi4uZm9ybWF0RXJyb3JzKF9jbGllbnRFbnYuZXJyb3IuZm9ybWF0KCkpLFxyXG4gICk7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZXNcIik7XHJcbn1cclxuXHJcbmZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhfY2xpZW50RW52LmRhdGEpKSB7XHJcbiAgaWYgKCFrZXkuc3RhcnRzV2l0aChcIk5FWFRfUFVCTElDX1wiKSkge1xyXG4gICAgY29uc29sZS53YXJuKFxyXG4gICAgICBg4p2MIEludmFsaWQgcHVibGljIGVudmlyb25tZW50IHZhcmlhYmxlIG5hbWU6ICR7a2V5fS4gSXQgbXVzdCBiZWdpbiB3aXRoICdORVhUX1BVQkxJQ18nYCxcclxuICAgICk7XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwdWJsaWMgZW52aXJvbm1lbnQgdmFyaWFibGUgbmFtZVwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbnYgPSBfY2xpZW50RW52LmRhdGE7XHJcbiJdLCJuYW1lcyI6WyJjbGllbnRFbnYiLCJjbGllbnRTY2hlbWEiLCJfY2xpZW50RW52Iiwic2FmZVBhcnNlIiwiZm9ybWF0RXJyb3JzIiwiZXJyb3JzIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsIm5hbWUiLCJ2YWx1ZSIsIl9lcnJvcnMiLCJqb2luIiwiZmlsdGVyIiwiQm9vbGVhbiIsInN1Y2Nlc3MiLCJjb25zb2xlIiwiZXJyb3IiLCJmb3JtYXQiLCJFcnJvciIsImtleSIsImtleXMiLCJkYXRhIiwic3RhcnRzV2l0aCIsIndhcm4iLCJlbnYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/env/client.mjs\n");

/***/ }),

/***/ "(api)/./src/env/schema.mjs":
/*!****************************!*\
  !*** ./src/env/schema.mjs ***!
  \****************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clientEnv\": () => (/* binding */ clientEnv),\n/* harmony export */   \"clientSchema\": () => (/* binding */ clientSchema),\n/* harmony export */   \"serverSchema\": () => (/* binding */ serverSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);\nzod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// @ts-check\n\n/**\r\n * Specify your server-side environment variables schema here.\r\n * This way you can ensure the app isn't built with invalid env vars.\r\n */ const serverSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url(),\n    NODE_ENV: zod__WEBPACK_IMPORTED_MODULE_0__.z[\"enum\"]([\n        \"development\",\n        \"test\",\n        \"production\"\n    ]),\n    NEXTAUTH_SECRET: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    NEXTAUTH_URL: zod__WEBPACK_IMPORTED_MODULE_0__.z.preprocess(// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL\n    // Since NextAuth automatically uses the VERCEL_URL if present.\n    (str)=>process.env.VERCEL_URL ?? str, // VERCEL_URL doesnt include `https` so it cant be validated as a URL\n    process.env.VERCEL ? zod__WEBPACK_IMPORTED_MODULE_0__.z.string() : zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url()),\n    GOOGLE_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    GOOGLE_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()\n});\n/**\r\n * Specify your client-side environment variables schema here.\r\n * This way you can ensure the app isn't built with invalid env vars.\r\n * To expose them to the client, prefix them with `NEXT_PUBLIC_`.\r\n */ const clientSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n});\n/**\r\n * You can't destruct `process.env` as a regular object, so you have to do\r\n * it manually here. This is because Next.js evaluates this at build time,\r\n * and only used environment variables are included in the build.\r\n * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}\r\n */ const clientEnv = {\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZW52L3NjaGVtYS5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFlBQVk7QUFDWTtBQUV4QjtJQUtFRyxZQUFZLEVBQUVILENBQUMsQ0FBQ0ksTUFBTSxFQUFFLENBQUNDLEdBQUcsRUFBRTtJQUM5QkMsUUFBUSxFQUFFTixDQUFDLENBQUNPLElBQUksQ0FBQztJQUFDLFVBQWE7UUFBRSxNQUFNO1FBQUUsZ0RBQVk7S0FBQyxDQUFDO0lBQ3ZEQztJQUNBQyxZQUFZLEVBQUVULENBQUMsQ0FBQ1U7SUFFZDtJQUNBLENBQUNDLEdBQUcsR0FBS0MsT0FBTyxDQUFDQyxFQUFBQSx5Q0FBSUM7SUFFckJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxFQUFBQSw2Q0FBV1gsR0FBTSxFQUFFLEdBQUdKLENBQUMsQ0FBQ0ksTUFBTSxFQUFFLENBQUNDLEdBQUcsRUFBRSxDQUNuRDtJQUNEVyxnQkFBZ0IsRUFBRWhCLENBQUMsQ0FBQ0ksTUFBTSxFQUFFO0lBQzVCYSxvQkFBb0IsRUFBRWpCLENBQUMsQ0FBQ0ksTUFBTSxFQUFFO0NBQ2pDLENBQUMsQ0FBQztBQUVIO0NBT0MsQ0FBQyxDQUFDO0FBRUg7Q0FRQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2F0Ly4vc3JjL2Vudi9zY2hlbWEubWpzPzQyMjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLWNoZWNrXHJcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XHJcblxyXG4vKipcclxuICogU3BlY2lmeSB5b3VyIHNlcnZlci1zaWRlIGVudmlyb25tZW50IHZhcmlhYmxlcyBzY2hlbWEgaGVyZS5cclxuICogVGhpcyB3YXkgeW91IGNhbiBlbnN1cmUgdGhlIGFwcCBpc24ndCBidWlsdCB3aXRoIGludmFsaWQgZW52IHZhcnMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2VydmVyU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIERBVEFCQVNFX1VSTDogei5zdHJpbmcoKS51cmwoKSxcclxuICBOT0RFX0VOVjogei5lbnVtKFtcImRldmVsb3BtZW50XCIsIFwidGVzdFwiLCBcInByb2R1Y3Rpb25cIl0pLFxyXG4gIE5FWFRBVVRIX1NFQ1JFVDogei5zdHJpbmcoKSxcclxuICBORVhUQVVUSF9VUkw6IHoucHJlcHJvY2VzcyhcclxuICAgIC8vIFRoaXMgbWFrZXMgVmVyY2VsIGRlcGxveW1lbnRzIG5vdCBmYWlsIGlmIHlvdSBkb24ndCBzZXQgTkVYVEFVVEhfVVJMXHJcbiAgICAvLyBTaW5jZSBOZXh0QXV0aCBhdXRvbWF0aWNhbGx5IHVzZXMgdGhlIFZFUkNFTF9VUkwgaWYgcHJlc2VudC5cclxuICAgIChzdHIpID0+IHByb2Nlc3MuZW52LlZFUkNFTF9VUkwgPz8gc3RyLFxyXG4gICAgLy8gVkVSQ0VMX1VSTCBkb2VzbnQgaW5jbHVkZSBgaHR0cHNgIHNvIGl0IGNhbnQgYmUgdmFsaWRhdGVkIGFzIGEgVVJMXHJcbiAgICBwcm9jZXNzLmVudi5WRVJDRUwgPyB6LnN0cmluZygpIDogei5zdHJpbmcoKS51cmwoKSxcclxuICApLFxyXG4gIEdPT0dMRV9DTElFTlRfSUQ6IHouc3RyaW5nKCksXHJcbiAgR09PR0xFX0NMSUVOVF9TRUNSRVQ6IHouc3RyaW5nKCksXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFNwZWNpZnkgeW91ciBjbGllbnQtc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc2NoZW1hIGhlcmUuXHJcbiAqIFRoaXMgd2F5IHlvdSBjYW4gZW5zdXJlIHRoZSBhcHAgaXNuJ3QgYnVpbHQgd2l0aCBpbnZhbGlkIGVudiB2YXJzLlxyXG4gKiBUbyBleHBvc2UgdGhlbSB0byB0aGUgY2xpZW50LCBwcmVmaXggdGhlbSB3aXRoIGBORVhUX1BVQkxJQ19gLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNsaWVudFNjaGVtYSA9IHoub2JqZWN0KHtcclxuICAvLyBORVhUX1BVQkxJQ19CQVI6IHouc3RyaW5nKCksXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFlvdSBjYW4ndCBkZXN0cnVjdCBgcHJvY2Vzcy5lbnZgIGFzIGEgcmVndWxhciBvYmplY3QsIHNvIHlvdSBoYXZlIHRvIGRvXHJcbiAqIGl0IG1hbnVhbGx5IGhlcmUuIFRoaXMgaXMgYmVjYXVzZSBOZXh0LmpzIGV2YWx1YXRlcyB0aGlzIGF0IGJ1aWxkIHRpbWUsXHJcbiAqIGFuZCBvbmx5IHVzZWQgZW52aXJvbm1lbnQgdmFyaWFibGVzIGFyZSBpbmNsdWRlZCBpbiB0aGUgYnVpbGQuXHJcbiAqIEB0eXBlIHt7IFtrIGluIGtleW9mIHouaW5mZXI8dHlwZW9mIGNsaWVudFNjaGVtYT5dOiB6LmluZmVyPHR5cGVvZiBjbGllbnRTY2hlbWE+W2tdIHwgdW5kZWZpbmVkIH19XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2xpZW50RW52ID0ge1xyXG4gIC8vIE5FWFRfUFVCTElDX0JBUjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFSLFxyXG59O1xyXG4iXSwibmFtZXMiOlsieiIsInNlcnZlclNjaGVtYSIsIm9iamVjdCIsIkRBVEFCQVNFX1VSTCIsInN0cmluZyIsInVybCIsIk5PREVfRU5WIiwiZW51bSIsIk5FWFRBVVRIX1NFQ1JFVCIsIk5FWFRBVVRIX1VSTCIsInByZXByb2Nlc3MiLCJzdHIiLCJwcm9jZXNzIiwiZW52IiwiVkVSQ0VMX1VSTCIsIlZFUkNFTCIsIkdPT0dMRV9DTElFTlRfSUQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImNsaWVudFNjaGVtYSIsImNsaWVudEVudiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/env/schema.mjs\n");

/***/ }),

/***/ "(api)/./src/env/server.mjs":
/*!****************************!*\
  !*** ./src/env/server.mjs ***!
  \****************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"env\": () => (/* binding */ env)\n/* harmony export */ });\n/* harmony import */ var _schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema.mjs */ \"(api)/./src/env/schema.mjs\");\n/* harmony import */ var _client_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.mjs */ \"(api)/./src/env/client.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schema_mjs__WEBPACK_IMPORTED_MODULE_0__, _client_mjs__WEBPACK_IMPORTED_MODULE_1__]);\n([_schema_mjs__WEBPACK_IMPORTED_MODULE_0__, _client_mjs__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// @ts-check\n/**\r\n * This file is included in `/next.config.mjs` which ensures the app isn't built with invalid env vars.\r\n * It has to be a `.mjs`-file to be imported there.\r\n */ \n\nconst _serverEnv = _schema_mjs__WEBPACK_IMPORTED_MODULE_0__.serverSchema.safeParse(process.env);\nif (!_serverEnv.success) {\n    console.error(\"❌ Invalid environment variables:\\n\", ...(0,_client_mjs__WEBPACK_IMPORTED_MODULE_1__.formatErrors)(_serverEnv.error.format()));\n    throw new Error(\"Invalid environment variables\");\n}\nfor (let key of Object.keys(_serverEnv.data)){\n    if (key.startsWith(\"NEXT_PUBLIC_\")) {\n        console.warn(\"❌ You are exposing a server-side env-variable:\", key);\n        throw new Error(\"You are exposing a server-side env-variable\");\n    }\n}\nconst env = {\n    ..._serverEnv.data,\n    ..._client_mjs__WEBPACK_IMPORTED_MODULE_1__.env\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZW52L3NlcnZlci5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsWUFBWTtBQUNaO0FBS0EsU0FBU0MsR0FBRyxJQUFJQyxTQUFTLEVBQUVDLFlBQVksUUFBUSxjQUFjLENBQUM7QUFFOUQsTUFBTUMsVUFBVSxHQUFHSixZQUFZLENBQUNLLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDTDtBQUVsRCxJQUF5QjtBQUdsQkU7SUFFTCxNQUFNLElBQUlRLEtBQUssK0RBQUMsVUFBK0IsQ0FBQyxDQUFDO0NBQ2xEO0FBRUQsS0FBSyxJQUFJQyxHQUFHLElBQUlDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDVixVQUFVLENBQUNXLElBQUksQ0FBQyxDQUFFO0lBQzVDLElBQUlILEdBQUcsQ0FBQ0ksVUFBVSxDQUFDLGNBQWMsQ0FBQyxFQUFFOztRQUdsQyxNQUFNLElBQUlMLEtBQUssQ0FBQztLQUNqQjtDQUNGO0FBRUQsT0FBTyxNQUFNVixHQUFHLEdBQUc7SUFBRTs7QUFBbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXQvLi9zcmMvZW52L3NlcnZlci5tanM/YjAyOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtY2hlY2tcclxuLyoqXHJcbiAqIFRoaXMgZmlsZSBpcyBpbmNsdWRlZCBpbiBgL25leHQuY29uZmlnLm1qc2Agd2hpY2ggZW5zdXJlcyB0aGUgYXBwIGlzbid0IGJ1aWx0IHdpdGggaW52YWxpZCBlbnYgdmFycy5cclxuICogSXQgaGFzIHRvIGJlIGEgYC5tanNgLWZpbGUgdG8gYmUgaW1wb3J0ZWQgdGhlcmUuXHJcbiAqL1xyXG5pbXBvcnQgeyBzZXJ2ZXJTY2hlbWEgfSBmcm9tIFwiLi9zY2hlbWEubWpzXCI7XHJcbmltcG9ydCB7IGVudiBhcyBjbGllbnRFbnYsIGZvcm1hdEVycm9ycyB9IGZyb20gXCIuL2NsaWVudC5tanNcIjtcclxuXHJcbmNvbnN0IF9zZXJ2ZXJFbnYgPSBzZXJ2ZXJTY2hlbWEuc2FmZVBhcnNlKHByb2Nlc3MuZW52KTtcclxuXHJcbmlmICghX3NlcnZlckVudi5zdWNjZXNzKSB7XHJcbiAgY29uc29sZS5lcnJvcihcclxuICAgIFwi4p2MIEludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGVzOlxcblwiLFxyXG4gICAgLi4uZm9ybWF0RXJyb3JzKF9zZXJ2ZXJFbnYuZXJyb3IuZm9ybWF0KCkpLFxyXG4gICk7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZXNcIik7XHJcbn1cclxuXHJcbmZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhfc2VydmVyRW52LmRhdGEpKSB7XHJcbiAgaWYgKGtleS5zdGFydHNXaXRoKFwiTkVYVF9QVUJMSUNfXCIpKSB7XHJcbiAgICBjb25zb2xlLndhcm4oXCLinYwgWW91IGFyZSBleHBvc2luZyBhIHNlcnZlci1zaWRlIGVudi12YXJpYWJsZTpcIiwga2V5KTtcclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgYXJlIGV4cG9zaW5nIGEgc2VydmVyLXNpZGUgZW52LXZhcmlhYmxlXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVudiA9IHsgLi4uX3NlcnZlckVudi5kYXRhLCAuLi5jbGllbnRFbnYgfTtcclxuIl0sIm5hbWVzIjpbInNlcnZlclNjaGVtYSIsImVudiIsImNsaWVudEVudiIsImZvcm1hdEVycm9ycyIsIl9zZXJ2ZXJFbnYiLCJzYWZlUGFyc2UiLCJwcm9jZXNzIiwic3VjY2VzcyIsImNvbnNvbGUiLCJlcnJvciIsImZvcm1hdCIsIkVycm9yIiwia2V5IiwiT2JqZWN0Iiwia2V5cyIsImRhdGEiLCJzdGFydHNXaXRoIiwid2FybiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/env/server.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].tsx"));
module.exports = __webpack_exports__;

})();