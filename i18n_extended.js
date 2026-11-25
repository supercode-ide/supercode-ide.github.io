/* ==========================================================================
   SUPERCODE IDE V3.0 - ULTRA-LIGHT UNIVERSAL 14-PAGE x 10-LANGUAGE ROUTER
   Core Web Vitals Edition: ~28KB Instant Router + On-Demand Per-Locale Packs
   ========================================================================== */
(function () {
  'use strict';

  /* 1. COMMON UI & 14-PAGE NAVIGATION DICTIONARY */
  var COMMON_UI = {
  "en": {
    "htmlLang": "en",
    "grp_core": "Editor & Large Files",
    "grp_lang": "Offline Compilers & Languages",
    "grp_devops": "Web, SQL & Remote DevOps",
    "nav_home": "Overview",
    "nav_code_editor": "Code Editor",
    "nav_large_file": "GB Large Files",
    "nav_python_ide": "Python IDE",
    "nav_c_compiler": "C17 Compiler",
    "nav_cpp_ide": "C++20 IDE",
    "nav_java_ide": "Java 17 IDE",
    "nav_js_ide": "JavaScript",
    "nav_lua_ide": "Lua 5.4",
    "nav_shell_ide": "Shell & Kotlin",
    "nav_web_ide": "Web & PHP",
    "nav_sql_ide": "SQL Studio",
    "nav_git_client": "Visual Git",
    "nav_sftp_client": "SFTP & FTPS",
    "nav_cta": "Google Play",
    "cta_btn": "Get on Google Play",
    "cta_tutorial": "App Guide",
    "bottom_tutorial": "App Guide",
    "bottom_cta": "Get",
    "btn_run": "Run Demo",
    "term_title": "Interactive Console Output",
    "modal_title": "Select Language",
    "spec_pkg": "Lightweight APK",
    "spec_fps": "Smooth View",
    "spec_themes": "Studio Themes",
    "spec_ui": "UI Languages",
    "ce_spec1": "Syntax File Types",
    "ce_spec2": "Adaptive Tools",
    "ce_spec3": "Swipe-Up Symbols",
    "lf_spec1": "Disk-Paged Stream",
    "lf_spec2": "Charsets Probed",
    "lf_spec3": "Virtual Clipboard",
    "lf_spec4": "Fuzzy File Scan",
    "py_spec1": "Offline Python",
    "py_spec2": "PyPI + Local .whl",
    "py_spec3": "NumPy & Matplotlib",
    "py_spec4": "Interactive input()",
    "c_spec1": "GNU -std=gnu17",
    "c_spec2": "Auto Multi-File",
    "c_spec3": "Stdlib & math.h",
    "c_spec4": "scanf / fgets Stdin",
    "cpp_spec1": "GNU -std=gnu++2a",
    "cpp_spec2": "Ranges & Smart Ptrs",
    "cpp_spec3": "Incremental Cache",
    "cpp_spec4": "Dual-Pane Console",
    "jv_spec1": "Offline SDK",
    "jv_spec2": "Bytecode Cache",
    "jv_spec3": "Built-In SQLite",
    "jv_spec4": "Custom libs/ Load",
    "js_spec1": "Modern JS Syntax",
    "js_spec2": "Multi-File Modules",
    "js_spec3": "Loop Kill Isolation",
    "js_spec4": "Cloud Auto-Bundler",
    "lua_spec1": "Native Lua Engine",
    "lua_spec2": "Instant Startup",
    "lua_spec3": "Table AST Aware",
    "lua_spec4": "Built-In Scripts",
    "sh_spec1": "Native OS Shell",
    "sh_spec2": "Cloud GNU Bash",
    "sh_spec3": ".kt / .kts Runner",
    "sh_spec4": "Workspace Synced",
    "web_spec1": "Real Local Origin",
    "web_spec2": "Offline PDO Engine",
    "web_spec3": "Streaming Ready",
    "web_spec4": "Mobile/Tab/Desktop",
    "sql_spec1": "Box / MD / CSV / JSON",
    "sql_spec2": "1-Tap DB Inspector",
    "sql_spec3": "Crypto/Regex/Stats",
    "sql_spec4": "Cloud Procedures",
    "git_spec1": "Built-In Git Engine",
    "git_spec2": "Time Machine Commits",
    "git_spec3": "Color Unified View",
    "git_spec4": "Visual Conflict UI",
    "sf_spec1": "SFTP \u00b7 FTPS \u00b7 FTP",
    "sf_spec2": "KeyStore SSH Vault",
    "sf_spec3": "Atomic Remote Save",
    "sf_spec4": "Concurrent + Resume",
    "sec_cap_eyebrow": "CORE CAPABILITIES",
    "sec_wf_eyebrow": "STEP-BY-STEP WORKFLOW",
    "comp_eyebrow": "CAPABILITY MATRIX",
    "sec3_eyebrow": "QUESTIONS & ANSWERS",
    "sec3_title": "Frequently Asked Questions",
    "meta_ver": "Built for Phones, Foldables & Tablets \u00b7 Lightweight 40.2 MB",
    "wf_foot_default": "Android 8.0+ \u00b7 Offline Ready \u00b7 8 Studio Themes \u00b7 32 UI Languages",
    "footer_tagline": "Native mobile code editor and offline development studio crafted for Android engineers, students, and educators worldwide."
  },
  "zh": {
    "htmlLang": "zh-Hans",
    "grp_core": "\u6838\u5fc3\u7f16\u8f91\u5668\u4e0e\u5de8\u578b\u6587\u4ef6",
    "grp_lang": "\u79bb\u7ebf\u7f16\u8bd1\u5668\u4e0e\u811a\u672c\u8bed\u8a00",
    "grp_devops": "\u5168\u6808 Web \u00b7 \u6570\u636e\u5e93 \u00b7 \u8fdc\u7a0b\u8fd0\u7ef4",
    "nav_home": "\u603b\u89c8\u9996\u9875",
    "nav_code_editor": "\u4ee3\u7801\u7f16\u8f91\u5668",
    "nav_large_file": "GB \u5927\u6587\u4ef6",
    "nav_python_ide": "Python IDE",
    "nav_c_compiler": "C \u8bed\u8a00\u7f16\u8bd1",
    "nav_cpp_ide": "C++20 IDE",
    "nav_java_ide": "Java 17",
    "nav_js_ide": "JavaScript",
    "nav_lua_ide": "Lua 5.4",
    "nav_shell_ide": "Shell & Kotlin",
    "nav_web_ide": "Web & PHP",
    "nav_sql_ide": "SQL \u6570\u636e\u5e93",
    "nav_git_client": "\u53ef\u89c6\u5316 Git",
    "nav_sftp_client": "SFTP & FTPS",
    "nav_cta": "Google Play",
    "cta_btn": "Google Play \u83b7\u53d6",
    "cta_tutorial": "\u65b0\u624b\u5f15\u5bfc",
    "bottom_tutorial": "\u65b0\u624b\u5f15\u5bfc",
    "bottom_cta": "\u83b7\u53d6",
    "btn_run": "\u8fd0\u884c\u793a\u4f8b",
    "term_title": "\u4ea4\u4e92\u5f0f\u63a7\u5236\u53f0\u8f93\u51fa",
    "modal_title": "\u9009\u62e9\u8bed\u8a00",
    "spec_pkg": "\u8f7b\u91cf\u5b89\u88c5\u5305",
    "spec_fps": "\u9ad8\u5237\u987a\u6ed1\u89c6\u53e3",
    "spec_themes": "\u5149\u5b66\u4e13\u4e1a\u4e3b\u9898",
    "spec_ui": "\u56fd\u9645\u5316\u754c\u9762",
    "ce_spec1": "\u8bed\u6cd5\u652f\u6301\u7c7b\u578b",
    "ce_spec2": "\u81ea\u9002\u5e94\u5feb\u6377\u5de5\u5177",
    "ce_spec3": "\u4e0a\u6ed1\u53cc\u5c42\u7b26\u53f7\u952e",
    "lf_spec1": "\u78c1\u76d8\u5206\u9875\u79d2\u5f00",
    "lf_spec2": "\u5b57\u7b26\u7f16\u7801\u63a2\u9488",
    "lf_spec3": "\u865a\u62df\u5de8\u578b\u526a\u8d34\u677f",
    "lf_spec4": "\u5168\u5c40\u6a21\u7cca\u641c\u6587\u4ef6",
    "py_spec1": "\u53cc\u6838\u79bb\u7ebf Python",
    "py_spec2": "PyPI + \u79bb\u7ebf .whl",
    "py_spec3": "NumPy \u79d1\u5b66\u7ed8\u56fe",
    "py_spec4": "\u5b9e\u65f6 input() \u4ea4\u4e92",
    "c_spec1": "\u6807\u51c6 GNU C17",
    "c_spec2": "\u591a\u6587\u4ef6\u81ea\u52a8\u94fe\u63a5",
    "c_spec3": "\u6807\u51c6\u5e93\u4e0e math.h",
    "c_spec4": "\u5b9e\u65f6 scanf \u8f93\u5165",
    "cpp_spec1": "\u73b0\u4ee3 GNU C++20",
    "cpp_spec2": "STL \u4e0e\u667a\u80fd\u6307\u9488",
    "cpp_spec3": "\u589e\u91cf\u54c8\u5e0c\u7f13\u5b58",
    "cpp_spec4": "\u6a2a\u7ad6\u5c4f\u5206\u5c4f\u7ec8\u7aef",
    "jv_spec1": "\u79bb\u7ebf Java SDK",
    "jv_spec2": "\u5b57\u8282\u7801\u79d2\u7ea7\u7f13\u5b58",
    "jv_spec3": "\u5185\u7f6e SQLite \u9a71\u52a8",
    "jv_spec4": "\u652f\u6301\u81ea\u5b9a\u4e49 .jar",
    "js_spec1": "\u73b0\u4ee3 ES2024 \u8bed\u6cd5",
    "js_spec2": "ESM + CJS \u6a21\u5757",
    "js_spec3": "\u6b7b\u5faa\u73af\u77ac\u65f6\u7194\u65ad",
    "js_spec4": "Node \u4e91\u7aef\u6253\u5305",
    "lua_spec1": "\u539f\u751f Lua \u5f15\u64ce",
    "lua_spec2": "\u5fae\u79d2\u7ea7\u77ac\u65f6\u542f\u52a8",
    "lua_spec3": ". \u4e0e : \u8bed\u6cd5\u611f\u77e5",
    "lua_spec4": "\u5185\u7f6e\u5b9e\u6218\u6a21\u677f",
    "sh_spec1": "\u539f\u751f Linux Shell",
    "sh_spec2": "\u4e91\u7aef Bash 5.2",
    "sh_spec3": "Kotlin \u7f16\u8bd1\u8fd0\u884c",
    "sh_spec4": "\u4ea7\u7269\u540c\u6b65\u5de5\u7a0b\u6811",
    "web_spec1": "\u771f\u5b9e\u672c\u5730 HTTP",
    "web_spec2": "\u79bb\u7ebf PHP+SQL",
    "web_spec3": "WASM \u6d41\u5f0f\u52a0\u8f7d",
    "web_spec4": "\u624b\u673a/\u5e73\u677f/\u684c\u9762\u89c6\u53e3",
    "sql_spec1": "9 \u79cd\u8868\u683c\u5bfc\u51fa\u6a21\u5f0f",
    "sql_spec2": ".db \u6570\u636e\u5e93\u76f4\u5f00",
    "sql_spec3": "\u52a0\u5bc6/\u6b63\u5219/\u7edf\u8ba1\u51fd\u6570",
    "sql_spec4": "MySQL \u5b58\u50a8\u8fc7\u7a0b",
    "git_spec1": "\u96f6\u4f9d\u8d56\u5185\u7f6e\u5f15\u64ce",
    "git_spec2": "\u65f6\u5149\u673a\u5386\u53f2\u63d0\u4ea4",
    "git_spec3": "\u5f69\u8272\u7edf\u4e00 Diff",
    "git_spec4": "\u53ef\u89c6\u5316\u51b2\u7a81\u5408\u5e76",
    "sf_spec1": "SFTP \u00b7 FTPS \u00b7 FTP",
    "sf_spec2": "\u786c\u4ef6\u7ea7\u5bc6\u94a5\u4fdd\u9669\u7bb1",
    "sf_spec3": "\u4e09\u9636\u6bb5\u539f\u5b50\u4fdd\u5b58",
    "sf_spec4": "\u591a\u7ebf\u7a0b\u65ad\u70b9\u7eed\u4f20",
    "sec_cap_eyebrow": "\u6838\u5fc3\u5de5\u7a0b\u80fd\u529b",
    "sec_wf_eyebrow": "\u5206\u6b65\u5b9e\u64cd\u4f7f\u7528\u65b9\u6cd5",
    "comp_eyebrow": "\u6a2a\u5411\u80fd\u529b\u5bf9\u6bd4\u77e9\u9635",
    "sec3_eyebrow": "\u5e38\u89c1\u95ee\u7b54",
    "sec3_title": "\u5e38\u89c1\u95ee\u9898\u89e3\u7b54 (FAQ)",
    "meta_ver": "\u9002\u914d\u624b\u673a\u3001\u6298\u53e0\u5c4f\u4e0e\u5e73\u677f \u00b7 \u8f7b\u91cf 40.2 MB",
    "wf_foot_default": "Android 8.0+ \u00b7 \u6838\u5fc3\u529f\u80fd\u79bb\u7ebf\u53ef\u7528 \u00b7 8 \u5957\u5149\u5b66\u4e3b\u9898 \u00b7 32 \u79cd\u754c\u9762\u8bed\u8a00",
    "footer_tagline": "\u4e3a\u5168\u7403 Android \u5de5\u7a0b\u5e08\u3001\u9ad8\u6821\u5b66\u5b50\u4e0e\u6559\u80b2\u8005\u5320\u5fc3\u6253\u9020\u7684\u539f\u751f\u79fb\u52a8\u4ee3\u7801\u7f16\u8f91\u5668\u4e0e\u5168\u6808\u79bb\u7ebf\u5f00\u53d1\u5de5\u4f5c\u5ba4\u3002"
  },
  "es": {
    "htmlLang": "es",
    "grp_core": "Editor y Archivos Grandes",
    "grp_lang": "Compiladores e Idiomas Offline",
    "grp_devops": "Web, SQL y DevOps Remoto",
    "nav_home": "Inicio",
    "nav_code_editor": "Editor",
    "nav_large_file": "Archivos GB",
    "nav_python_ide": "Python IDE",
    "nav_c_compiler": "Compilador C",
    "nav_cpp_ide": "C++20 IDE",
    "nav_java_ide": "Java 17",
    "nav_js_ide": "JavaScript",
    "nav_lua_ide": "Lua 5.4",
    "nav_shell_ide": "Shell y Kotlin",
    "nav_web_ide": "Web y PHP",
    "nav_sql_ide": "SQL Studio",
    "nav_git_client": "Git Visual",
    "nav_sftp_client": "SFTP y FTPS",
    "nav_cta": "Google Play",
    "cta_btn": "Descargar en Play",
    "cta_tutorial": "Gu\u00eda App",
    "bottom_tutorial": "Gu\u00eda App",
    "bottom_cta": "Obtener",
    "btn_run": "Probar Demo",
    "term_title": "Salida de Consola Interactiva",
    "modal_title": "Seleccionar idioma",
    "spec_pkg": "APK Ligero",
    "spec_fps": "Vista Fluida",
    "spec_themes": "Temas Studio",
    "spec_ui": "Idiomas UI",
    "ce_spec1": "Tipos de Archivo",
    "ce_spec2": "Herramientas",
    "ce_spec3": "Teclas S\u00edmbolos",
    "lf_spec1": "Paginaci\u00f3n GB",
    "lf_spec2": "Codificaciones",
    "lf_spec3": "Portapapeles Virtual",
    "lf_spec4": "B\u00fasqueda Difusa",
    "py_spec1": "Python Offline",
    "py_spec2": "PyPI + .whl Local",
    "py_spec3": "NumPy y Matplotlib",
    "py_spec4": "input() en Vivo",
    "c_spec1": "GNU -std=gnu17",
    "c_spec2": "Multiarchivo .c/.h",
    "c_spec3": "Stdlib y math.h",
    "c_spec4": "scanf en Vivo",
    "cpp_spec1": "GNU -std=gnu++2a",
    "cpp_spec2": "STL y Smart Ptrs",
    "cpp_spec3": "Cach\u00e9 Incremental",
    "cpp_spec4": "Consola Dual",
    "jv_spec1": "SDK Offline",
    "jv_spec2": "Cach\u00e9 Bytecode",
    "jv_spec3": "SQLite Integrado",
    "jv_spec4": "Soporte .jar",
    "js_spec1": "Sintaxis ES2024",
    "js_spec2": "M\u00f3dulos ESM/CJS",
    "js_spec3": "Corte de Bucles",
    "js_spec4": "Bundler Node",
    "lua_spec1": "Motor Lua Nativo",
    "lua_spec2": "Arranque R\u00e1pido",
    "lua_spec3": "AST . y :",
    "lua_spec4": "Ejemplos Listos",
    "sh_spec1": "Shell Linux Nativo",
    "sh_spec2": "Bash 5.2 Cloud",
    "sh_spec3": "Ejecutor Kotlin",
    "sh_spec4": "Sincronizado",
    "web_spec1": "HTTP Local Real",
    "web_spec2": "PHP+SQL Offline",
    "web_spec3": "Soporte WASM",
    "web_spec4": "M\u00f3vil/Tab/PC",
    "sql_spec1": "9 Modos de Tabla",
    "sql_spec2": "Visor .db Directo",
    "sql_spec3": "Funciones Extra",
    "sql_spec4": "MySQL 8 Cloud",
    "git_spec1": "Motor Git Propio",
    "git_spec2": "Historial Commits",
    "git_spec3": "Diff en Color",
    "git_spec4": "Fusi\u00f3n Visual",
    "sf_spec1": "SFTP \u00b7 FTPS \u00b7 FTP",
    "sf_spec2": "B\u00f3veda SSH AES",
    "sf_spec3": "Guardado At\u00f3mico",
    "sf_spec4": "4 Hilos + Resume",
    "sec_cap_eyebrow": "CAPACIDADES PRINCIPALES",
    "sec_wf_eyebrow": "GU\u00cdA PASO A PASO",
    "comp_eyebrow": "MATRIZ COMPARATIVA",
    "sec3_eyebrow": "PREGUNTAS Y RESPUESTAS",
    "sec3_title": "Preguntas Frecuentes",
    "meta_ver": "Para Tel\u00e9fonos, Plegables y Tablets \u00b7 Ligero 40.2 MB",
    "wf_foot_default": "Android 8.0+ \u00b7 Listo Sin Internet \u00b7 8 Temas \u00b7 32 Idiomas UI",
    "footer_tagline": "Editor de c\u00f3digo nativo y estudio de desarrollo offline creado para ingenieros, estudiantes y docentes en Android."
  },
  "ja": {
    "htmlLang": "ja",
    "grp_core": "\u30b3\u30a2\u30a8\u30c7\u30a3\u30bf & \u5927\u5bb9\u91cf\u30d5\u30a1\u30a4\u30eb",
    "grp_lang": "\u30aa\u30d5\u30e9\u30a4\u30f3\u30b3\u30f3\u30d1\u30a4\u30e9 & \u8a00\u8a9e",
    "grp_devops": "Web\u30fbSQL\u30fb\u30ea\u30e2\u30fc\u30c8\u904b\u7528",
    "nav_home": "\u6982\u8981",
    "nav_code_editor": "\u30a8\u30c7\u30a3\u30bf",
    "nav_large_file": "GB\u5927\u5bb9\u91cf",
    "nav_python_ide": "Python",
    "nav_c_compiler": "C\u8a00\u8a9e",
    "nav_cpp_ide": "C++20",
    "nav_java_ide": "Java 17",
    "nav_js_ide": "JavaScript",
    "nav_lua_ide": "Lua 5.4",
    "nav_shell_ide": "Shell & Kotlin",
    "nav_web_ide": "Web & PHP",
    "nav_sql_ide": "SQL",
    "nav_git_client": "Git\u7ba1\u7406",
    "nav_sftp_client": "SFTP & FTPS",
    "nav_cta": "Google Play",
    "cta_btn": "Google Play \u3067\u5165\u624b",
    "cta_tutorial": "\u5165\u9580\u30ac\u30a4\u30c9",
    "bottom_tutorial": "\u5165\u9580\u30ac\u30a4\u30c9",
    "bottom_cta": "\u5165\u624b",
    "btn_run": "\u30c7\u30e2\u3092\u5b9f\u884c",
    "term_title": "\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u30fb\u30b3\u30f3\u30bd\u30fc\u30eb\u51fa\u529b",
    "modal_title": "\u8a00\u8a9e\u3092\u9078\u629e",
    "spec_pkg": "\u8efd\u91cf\u30d1\u30c3\u30b1\u30fc\u30b8",
    "spec_fps": "\u6ed1\u3089\u304b\u306a\u8868\u793a",
    "spec_themes": "\u5149\u5b66\u30c6\u30fc\u30de",
    "spec_ui": "UI\u5bfe\u5fdc\u8a00\u8a9e",
    "ce_spec1": "\u5bfe\u5fdc\u30d5\u30a1\u30a4\u30eb\u5f62\u5f0f",
    "ce_spec2": "\u53ef\u5909\u30c4\u30fc\u30eb\u7fa4",
    "ce_spec3": "2\u5c64\u8a18\u53f7\u30ad\u30fc",
    "lf_spec1": "GB\u5206\u5272\u30da\u30fc\u30b8\u30f3\u30b0",
    "lf_spec2": "\u81ea\u52d5\u5224\u5225\u6587\u5b57\u30b3\u30fc\u30c9",
    "lf_spec3": "\u4eee\u60f3\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9",
    "lf_spec4": "\u9ad8\u901f\u30d5\u30a1\u30a4\u30eb\u691c\u7d22",
    "py_spec1": "\u30aa\u30d5\u30e9\u30a4\u30f3 Python",
    "py_spec2": "PyPI + .whl\u5bfe\u5fdc",
    "py_spec3": "NumPy & \u30b0\u30e9\u30d5\u4fdd\u5b58",
    "py_spec4": "\u5bfe\u8a71 input()",
    "c_spec1": "GNU C17 \u6e96\u62e0",
    "c_spec2": "\u8907\u6570\u30d5\u30a1\u30a4\u30eb\u81ea\u52d5\u7d50\u5408",
    "c_spec3": "\u6a19\u6e96 & math.h",
    "c_spec4": "\u5bfe\u8a71 scanf \u5165\u529b",
    "cpp_spec1": "GNU C++20 \u6e96\u62e0",
    "cpp_spec2": "STL & \u30b9\u30de\u30fc\u30c8\u30dd\u30a4\u30f3\u30bf",
    "cpp_spec3": "\u5dee\u5206\u30d3\u30eb\u30c9\u30ad\u30e3\u30c3\u30b7\u30e5",
    "cpp_spec4": "2\u753b\u9762\u5206\u5272\u30b3\u30f3\u30bd\u30fc\u30eb",
    "jv_spec1": "\u30aa\u30d5\u30e9\u30a4\u30f3 SDK",
    "jv_spec2": "\u9ad8\u901f\u30ad\u30e3\u30c3\u30b7\u30e5",
    "jv_spec3": "SQLite JDBC\u5185\u8535",
    "jv_spec4": "\u5916\u90e8 .jar \u8aad\u8fbc",
    "js_spec1": "\u6700\u65b0 ES2024",
    "js_spec2": "ESM & CJS \u5bfe\u5fdc",
    "js_spec3": "\u7121\u9650\u30eb\u30fc\u30d7\u5373\u505c\u6b62",
    "js_spec4": "Node \u30af\u30e9\u30a6\u30c9\u9023\u643a",
    "lua_spec1": "\u30cd\u30a4\u30c6\u30a3\u30d6 Lua",
    "lua_spec2": "\u30de\u30a4\u30af\u30ed\u79d2\u8d77\u52d5",
    "lua_spec3": ". / : \u88dc\u5b8c\u5bfe\u5fdc",
    "lua_spec4": "\u30b5\u30f3\u30d7\u30eb\u5185\u8535",
    "sh_spec1": "\u30cd\u30a4\u30c6\u30a3\u30d6 Shell",
    "sh_spec2": "\u30af\u30e9\u30a6\u30c9 Bash 5.2",
    "sh_spec3": "Kotlin \u5b9f\u884c",
    "sh_spec4": "\u51fa\u529b\u30d5\u30a1\u30a4\u30eb\u540c\u671f",
    "web_spec1": "\u30ed\u30fc\u30ab\u30eb HTTP",
    "web_spec2": "\u30aa\u30d5\u30e9\u30a4\u30f3 PHP+SQL",
    "web_spec3": "WASM \u914d\u4fe1\u5bfe\u5fdc",
    "web_spec4": "\u30b9\u30de\u30db/\u30bf\u30d6/PC\u8868\u793a",
    "sql_spec1": "9\u7a2e\u306e\u51fa\u529b\u5f62\u5f0f",
    "sql_spec2": ".db \u76f4\u63a5\u30a4\u30f3\u30b9\u30da\u30af\u30bf",
    "sql_spec3": "\u7d71\u8a08\u30fb\u6b63\u898f\u8868\u73fe\u95a2\u6570",
    "sql_spec4": "MySQL 8 \u5bfe\u5fdc",
    "git_spec1": "\u5358\u4f53\u5b8c\u7d50 Git",
    "git_spec2": "\u5c65\u6b74\u30bf\u30a4\u30e0\u30de\u30b7\u30f3",
    "git_spec3": "\u30ab\u30e9\u30fc Diff \u8868\u793a",
    "git_spec4": "\u8996\u899a\u7684\u7af6\u5408\u89e3\u6c7a",
    "sf_spec1": "SFTP\u30fbFTPS\u30fbFTP",
    "sf_spec2": "AES-256 \u9375\u4fdd\u7ba1",
    "sf_spec3": "3\u6bb5\u968e\u30a2\u30c8\u30df\u30c3\u30af\u4fdd\u5b58",
    "sf_spec4": "\u4e26\u5217\u8ee2\u9001 & \u30ec\u30b8\u30e5\u30fc\u30e0",
    "sec_cap_eyebrow": "\u4e3b\u8981\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u6a5f\u80fd",
    "sec_wf_eyebrow": "\u5b9f\u8df5\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9",
    "comp_eyebrow": "\u6a5f\u80fd\u6bd4\u8f03\u30de\u30c8\u30ea\u30af\u30b9",
    "sec3_eyebrow": "\u3088\u304f\u3042\u308b\u8cea\u554f",
    "sec3_title": "\u3088\u304f\u3042\u308b\u8cea\u554f (FAQ)",
    "meta_ver": "\u30b9\u30de\u30db\u30fb\u6298\u308a\u305f\u305f\u307f\u30fb\u30bf\u30d6\u30ec\u30c3\u30c8\u5bfe\u5fdc \u00b7 \u8efd\u91cf 40.2 MB",
    "wf_foot_default": "Android 8.0+ \u00b7 \u30aa\u30d5\u30e9\u30a4\u30f3\u5bfe\u5fdc \u00b7 8\u3064\u306e\u30b9\u30bf\u30b8\u30aa\u30c6\u30fc\u30de \u00b7 32\u8a00\u8a9e UI",
    "footer_tagline": "\u4e16\u754c\u4e2d\u306e Android \u30a8\u30f3\u30b8\u30cb\u30a2\u3001\u5b66\u751f\u3001\u5b66\u7fd2\u8005\u306e\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u305f\u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\uff06\u30aa\u30d5\u30e9\u30a4\u30f3\u958b\u767a\u30b9\u30bf\u30b8\u30aa\u3002"
  },
  "de": {
    "htmlLang": "de",
    "grp_core": "Editor & Gro\u00dfe Dateien",
    "grp_lang": "Offline-Compiler & Sprachen",
    "grp_devops": "Web, SQL & Remote-DevOps",
    "nav_home": "\u00dcbersicht",
    "nav_code_editor": "Code-Editor",
    "nav_large_file": "GB-Dateien",
    "nav_python_ide": "Python IDE",
    "nav_c_compiler": "C-Compiler",
    "nav_cpp_ide": "C++20 IDE",
    "nav_java_ide": "Java 17",
    "nav_js_ide": "JavaScript",
    "nav_lua_ide": "Lua 5.4",
    "nav_shell_ide": "Shell & Kotlin",
    "nav_web_ide": "Web & PHP",
    "nav_sql_ide": "SQL-Studio",
    "nav_git_client": "Visual Git",
    "nav_sftp_client": "SFTP & FTPS",
    "nav_cta": "Google Play",
    "cta_btn": "Bei Google Play",
    "cta_tutorial": "App-Guide",
    "bottom_tutorial": "App-Guide",
    "bottom_cta": "Laden",
    "btn_run": "Demo starten",
    "term_title": "Interaktive Konsolenausgabe",
    "modal_title": "Sprache w\u00e4hlen",
    "spec_pkg": "Kompakte APK",
    "spec_fps": "Fl\u00fcssige Ansicht",
    "spec_themes": "Studio-Themes",
    "spec_ui": "UI-Sprachen",
    "ce_spec1": "Dateitypen",
    "ce_spec2": "Adaptive Tools",
    "ce_spec3": "Swipe-Symbole",
    "lf_spec1": "GB-Paging",
    "lf_spec2": "Zeichens\u00e4tze",
    "lf_spec3": "Virtuelle Ablage",
    "lf_spec4": "Fuzzy-Dateisuche",
    "py_spec1": "Offline-Python",
    "py_spec2": "PyPI + .whl lokal",
    "py_spec3": "NumPy & Plots",
    "py_spec4": "Live input()",
    "c_spec1": "GNU -std=gnu17",
    "c_spec2": "Multi-Datei .c/.h",
    "c_spec3": "Stdlib & math.h",
    "c_spec4": "Live scanf",
    "cpp_spec1": "GNU -std=gnu++2a",
    "cpp_spec2": "STL & Smart Ptrs",
    "cpp_spec3": "Hash-Build-Cache",
    "cpp_spec4": "Split-Konsole",
    "jv_spec1": "Offline-SDK",
    "jv_spec2": "Bytecode-Cache",
    "jv_spec3": "SQLite-JDBC",
    "jv_spec4": "Eigene .jar",
    "js_spec1": "ES2024-Syntax",
    "js_spec2": "ESM & CommonJS",
    "js_spec3": "Loop-Schutz",
    "js_spec4": "Node-Bundler",
    "lua_spec1": "Natives Lua",
    "lua_spec2": "Sofortstart",
    "lua_spec3": "AST . & :",
    "lua_spec4": "Starter-Skripte",
    "sh_spec1": "Natives Linux-sh",
    "sh_spec2": "Cloud Bash 5.2",
    "sh_spec3": "Kotlin-Runner",
    "sh_spec4": "Ordner-Sync",
    "web_spec1": "Echter HTTP-Server",
    "web_spec2": "Offline PHP+SQL",
    "web_spec3": "WASM-Streaming",
    "web_spec4": "Mobil/Tab/Desktop",
    "sql_spec1": "9 Tabellenmodi",
    "sql_spec2": ".db-Inspektor",
    "sql_spec3": "60+ Zusatzfunktionen",
    "sql_spec4": "Cloud MySQL 8",
    "git_spec1": "Integriertes Git",
    "git_spec2": "Commit-Zeitreise",
    "git_spec3": "Farb-Diff-Ansicht",
    "git_spec4": "Merge-Assistent",
    "sf_spec1": "SFTP \u00b7 FTPS \u00b7 FTP",
    "sf_spec2": "AES-256-Tresor",
    "sf_spec3": "Atomares Speichern",
    "sf_spec4": "4 Streams + Resume",
    "sec_cap_eyebrow": "KERNFUNKTIONEN",
    "sec_wf_eyebrow": "SCHRITT-F\u00dcR-SCHRITT-ANLEITUNG",
    "comp_eyebrow": "FUNKTIONSVERGLEICH",
    "sec3_eyebrow": "FRAGEN & ANTWORTEN",
    "sec3_title": "H\u00e4ufig gestellte Fragen (FAQ)",
    "meta_ver": "F\u00fcr Smartphones, Foldables & Tablets \u00b7 Leichtgewichtige 40,2 MB",
    "wf_foot_default": "Android 8.0+ \u00b7 Offline einsatzbereit \u00b7 8 Studio-Themes \u00b7 32 UI-Sprachen",
    "footer_tagline": "Nativer mobiler Code-Editor und Offline-Entwicklungsstudio f\u00fcr Android-Entwickler, Studierende und Lehrende weltweit."
  },
  "fr": {
    "htmlLang": "fr",
    "grp_core": "\u00c9diteur & Gros Fichiers",
    "grp_lang": "Compilateurs & Langages Hors Ligne",
    "grp_devops": "Web, SQL & DevOps Distant",
    "nav_home": "Aper\u00e7u",
    "nav_code_editor": "\u00c9diteur",
    "nav_large_file": "Fichiers Go",
    "nav_python_ide": "Python IDE",
    "nav_c_compiler": "Compilateur C",
    "nav_cpp_ide": "C++20 IDE",
    "nav_java_ide": "Java 17",
    "nav_js_ide": "JavaScript",
    "nav_lua_ide": "Lua 5.4",
    "nav_shell_ide": "Shell & Kotlin",
    "nav_web_ide": "Web & PHP",
    "nav_sql_ide": "SQL Studio",
    "nav_git_client": "Git Visuel",
    "nav_sftp_client": "SFTP & FTPS",
    "nav_cta": "Google Play",
    "cta_btn": "Sur Google Play",
    "cta_tutorial": "Guide App",
    "bottom_tutorial": "Guide App",
    "bottom_cta": "Obtenir",
    "btn_run": "Lancer la d\u00e9mo",
    "term_title": "Sortie Console Interactive",
    "modal_title": "Choisir la langue",
    "spec_pkg": "APK L\u00e9ger",
    "spec_fps": "Affichage Fluide",
    "spec_themes": "Th\u00e8mes Studio",
    "spec_ui": "Langues UI",
    "ce_spec1": "Types de Fichiers",
    "ce_spec2": "Outils Adaptatifs",
    "ce_spec3": "Clavier Symboles",
    "lf_spec1": "Pagination Go",
    "lf_spec2": "Encodages D\u00e9tect\u00e9s",
    "lf_spec3": "Presse-papiers 15 Mo",
    "lf_spec4": "Recherche Floue",
    "py_spec1": "Python Hors Ligne",
    "py_spec2": "PyPI + .whl Local",
    "py_spec3": "NumPy & Graphes",
    "py_spec4": "input() Direct",
    "c_spec1": "GNU -std=gnu17",
    "c_spec2": "Multi-fichiers .c/.h",
    "c_spec3": "Stdlib & math.h",
    "c_spec4": "scanf en Direct",
    "cpp_spec1": "GNU -std=gnu++2a",
    "cpp_spec2": "STL & Smart Ptrs",
    "cpp_spec3": "Cache Incr\u00e9mental",
    "cpp_spec4": "Console Double",
    "jv_spec1": "SDK Hors Ligne",
    "jv_spec2": "Cache Bytecode",
    "jv_spec3": "JDBC SQLite Inclus",
    "jv_spec4": "Support .jar",
    "js_spec1": "Syntaxe ES2024",
    "js_spec2": "Modules ESM/CJS",
    "js_spec3": "Anti-Boucle <1ms",
    "js_spec4": "Bundler Node",
    "lua_spec1": "Moteur Lua Natif",
    "lua_spec2": "D\u00e9marrage \u00b5s",
    "lua_spec3": "AST . et :",
    "lua_spec4": "Mod\u00e8les Inclus",
    "sh_spec1": "Shell Linux Natif",
    "sh_spec2": "Bash 5.2 Cloud",
    "sh_spec3": "Ex\u00e9cution Kotlin",
    "sh_spec4": "Sync Dossier",
    "web_spec1": "Vrai Serveur HTTP",
    "web_spec2": "PHP+SQL Hors Ligne",
    "web_spec3": "Streaming WASM",
    "web_spec4": "Mobile/Tab/PC",
    "sql_spec1": "9 Modes Grille",
    "sql_spec2": "Inspecteur .db",
    "sql_spec3": "60+ Fonctions",
    "sql_spec4": "MySQL 8 Cloud",
    "git_spec1": "Moteur Git Int\u00e9gr\u00e9",
    "git_spec2": "Time Machine",
    "git_spec3": "Diff Unifi\u00e9 Couleur",
    "git_spec4": "Fusion Visuelle",
    "sf_spec1": "SFTP \u00b7 FTPS \u00b7 FTP",
    "sf_spec2": "Coffre AES-256",
    "sf_spec3": "Sauvegarde Atomique",
    "sf_spec4": "4 Flux + Reprise",
    "sec_cap_eyebrow": "FONCTIONNALIT\u00c9S CL\u00c9S",
    "sec_wf_eyebrow": "GUIDE D\u2019UTILISATION \u00c9TAPE PAR \u00c9TAPE",
    "comp_eyebrow": "TABLEAU COMPARATIF",
    "sec3_eyebrow": "QUESTIONS & R\u00c9PONSES",
    "sec3_title": "Questions Fr\u00e9quentes (FAQ)",
    "meta_ver": "Con\u00e7u pour Smartphones, Pliables & Tablettes \u00b7 L\u00e9ger 40,2 Mo",
    "wf_foot_default": "Android 8.0+ \u00b7 Pr\u00eat Hors Ligne \u00b7 8 Th\u00e8mes Studio \u00b7 32 Langues UI",
    "footer_tagline": "\u00c9diteur de code mobile natif et studio de d\u00e9veloppement hors ligne con\u00e7u pour les ing\u00e9nieurs et \u00e9tudiants sur Android."
  },
  "ko": {
    "htmlLang": "ko",
    "grp_core": "\ucf54\uc5b4 \uc5d0\ub514\ud130 & \ub300\uc6a9\ub7c9 \ud30c\uc77c",
    "grp_lang": "\uc624\ud504\ub77c\uc778 \ucef4\ud30c\uc77c\ub7ec & \uc5b8\uc5b4",
    "grp_devops": "\uc6f9 \u00b7 SQL \u00b7 \uc6d0\uaca9 DevOps",
    "nav_home": "\uc804\uccb4 \uac1c\uc694",
    "nav_code_editor": "\ucf54\ub4dc \uc5d0\ub514\ud130",
    "nav_large_file": "GB \ub300\uc6a9\ub7c9",
    "nav_python_ide": "Python IDE",
    "nav_c_compiler": "C \ucef4\ud30c\uc77c\ub7ec",
    "nav_cpp_ide": "C++20 IDE",
    "nav_java_ide": "Java 17",
    "nav_js_ide": "JavaScript",
    "nav_lua_ide": "Lua 5.4",
    "nav_shell_ide": "Shell & Kotlin",
    "nav_web_ide": "Web & PHP",
    "nav_sql_ide": "SQL \uc2a4\ud29c\ub514\uc624",
    "nav_git_client": "\ube44\uc8fc\uc5bc Git",
    "nav_sftp_client": "SFTP & FTPS",
    "nav_cta": "Google Play",
    "cta_btn": "Google Play \uc124\uce58",
    "cta_tutorial": "\uc571 \uac00\uc774\ub4dc",
    "bottom_tutorial": "\uc571 \uac00\uc774\ub4dc",
    "bottom_cta": "\uc124\uce58",
    "btn_run": "\ub370\ubaa8 \uc2e4\ud589",
    "term_title": "\ub300\ud654\ud615 \ucf58\uc194 \ucd9c\ub825",
    "modal_title": "\uc5b8\uc5b4 \uc120\ud0dd",
    "spec_pkg": "\uacbd\ub7c9 \uc124\uce58 \ud30c\uc77c",
    "spec_fps": "\uace0\uc8fc\uc0ac\uc728 \ubdf0\ud3ec\ud2b8",
    "spec_themes": "\uc2a4\ud29c\ub514\uc624 \ud14c\ub9c8",
    "spec_ui": "\uc9c0\uc6d0 UI \uc5b8\uc5b4",
    "ce_spec1": "\uad6c\ubb38 \uc9c0\uc6d0 \ud615\uc2dd",
    "ce_spec2": "\uc801\uc751\ud615 \ud234\ubc14",
    "ce_spec3": "\uc2a4\uc640\uc774\ud504 \uae30\ud638 \ud0a4",
    "lf_spec1": "GB \ub514\uc2a4\ud06c \ud398\uc774\uc9d5",
    "lf_spec2": "\uc790\ub3d9 \uc778\ucf54\ub529 \uac10\uc9c0",
    "lf_spec3": "\uac00\uc0c1 \ud074\ub9bd\ubcf4\ub4dc",
    "lf_spec4": "\uace0\uc18d \ud37c\uc9c0 \uac80\uc0c9",
    "py_spec1": "\uc624\ud504\ub77c\uc778 Python",
    "py_spec2": "PyPI + \ub85c\uceec .whl",
    "py_spec3": "NumPy & \ucc28\ud2b8 \uc800\uc7a5",
    "py_spec4": "\uc2e4\uc2dc\uac04 input()",
    "c_spec1": "GNU C17 \ud45c\uc900",
    "c_spec2": "\ub2e4\uc911 \ud30c\uc77c \uc790\ub3d9 \ub9c1\ud0b9",
    "c_spec3": "\ud45c\uc900 & math.h",
    "c_spec4": "\uc2e4\uc2dc\uac04 scanf",
    "cpp_spec1": "GNU C++20 \ud45c\uc900",
    "cpp_spec2": "STL & \uc2a4\ub9c8\ud2b8 \ud3ec\uc778\ud130",
    "cpp_spec3": "\uc99d\ubd84 \ud574\uc2dc \uce90\uc2dc",
    "cpp_spec4": "\ubd84\ud560 \ud654\uba74 \ucf58\uc194",
    "jv_spec1": "\uc624\ud504\ub77c\uc778 SDK",
    "jv_spec2": "\ubc14\uc774\ud2b8\ucf54\ub4dc \uce90\uc2dc",
    "jv_spec3": "\ub0b4\uc7a5 SQLite JDBC",
    "jv_spec4": "\uc678\ubd80 .jar \uc9c0\uc6d0",
    "js_spec1": "\ucd5c\uc2e0 ES2024",
    "js_spec2": "ESM & CJS \ubaa8\ub4c8",
    "js_spec3": "\ubb34\ud55c\ub8e8\ud504 \uc989\uc2dc \ucc28\ub2e8",
    "js_spec4": "Node \ud074\ub77c\uc6b0\ub4dc \ubc88\ub4e4",
    "lua_spec1": "\ub124\uc774\ud2f0\ube0c Lua",
    "lua_spec2": "\ub9c8\uc774\ud06c\ub85c\ucd08 \uc2e4\ud589",
    "lua_spec3": ". / : \uc790\ub3d9\uc644\uc131",
    "lua_spec4": "\uc608\uc81c \ud15c\ud50c\ub9bf",
    "sh_spec1": "\ub124\uc774\ud2f0\ube0c \uc178",
    "sh_spec2": "\ud074\ub77c\uc6b0\ub4dc Bash 5.2",
    "sh_spec3": "Kotlin \uc2e4\ud589",
    "sh_spec4": "\uc791\uc5c5 \ud3f4\ub354 \ub3d9\uae30\ud654",
    "web_spec1": "\ub85c\uceec HTTP \uc11c\ubc84",
    "web_spec2": "\uc624\ud504\ub77c\uc778 PHP+SQL",
    "web_spec3": "WASM \uc2a4\ud2b8\ub9ac\ubc0d",
    "web_spec4": "\ubaa8\ubc14\uc77c/\ud0dc\ube14\ub9bf/PC",
    "sql_spec1": "9\uac00\uc9c0 \ucd9c\ub825 \ubaa8\ub4dc",
    "sql_spec2": ".db \uc989\uc2dc \ud0d0\uc0c9",
    "sql_spec3": "60+ \ub0b4\uc7a5 \ud568\uc218",
    "sql_spec4": "MySQL 8 \ud504\ub85c\uc2dc\uc800",
    "git_spec1": "\ub0b4\uc7a5\ud615 Git \uc5d4\uc9c4",
    "git_spec2": "\ucee4\ubc0b \ud0c0\uc784\uba38\uc2e0",
    "git_spec3": "\uceec\ub7ec \ud1b5\ud569 Diff",
    "git_spec4": "\ube44\uc8fc\uc5bc \ucda9\ub3cc \ubcd1\ud569",
    "sf_spec1": "SFTP \u00b7 FTPS \u00b7 FTP",
    "sf_spec2": "AES-256 \ud0a4 \uae08\uace0",
    "sf_spec3": "3\ub2e8\uacc4 \uc6d0\uc790\uc801 \uc800\uc7a5",
    "sf_spec4": "\ubcd1\ub82c \uc804\uc1a1 & \uc774\uc5b4\ubc1b\uae30",
    "sec_cap_eyebrow": "\ud575\uc2ec \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1 \uae30\ub2a5",
    "sec_wf_eyebrow": "\ub2e8\uacc4\ubcc4 \uc2e4\uc804 \uc0ac\uc6a9\ubc95",
    "comp_eyebrow": "\uae30\ub2a5 \ube44\uad50 \ub9e4\ud2b8\ub9ad\uc2a4",
    "sec3_eyebrow": "\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38",
    "sec3_title": "\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38 (FAQ)",
    "meta_ver": "\uc2a4\ub9c8\ud2b8\ud3f0 \u00b7 \ud3f4\ub354\ube14 \u00b7 \ud0dc\ube14\ub9bf \ucd5c\uc801\ud654 \u00b7 \uacbd\ub7c9 40.2 MB",
    "wf_foot_default": "Android 8.0+ \u00b7 \uc624\ud504\ub77c\uc778 \uc9c0\uc6d0 \u00b7 8\uc885 \uc2a4\ud29c\ub514\uc624 \ud14c\ub9c8 \u00b7 32\uac1c UI \uc5b8\uc5b4",
    "footer_tagline": "\uc804 \uc138\uacc4 Android \uac1c\ubc1c\uc790, \uc804\uacf5\uc0dd, \uad50\uc721\uc790\ub97c \uc704\ud574 \uc815\uad50\ud558\uac8c \uc124\uacc4\ub41c \ub124\uc774\ud2f0\ube0c \ubaa8\ubc14\uc77c \ucf54\ub4dc \uc5d0\ub514\ud130 \ubc0f \uc624\ud504\ub77c\uc778 IDE."
  },
  "pt": {
    "htmlLang": "pt",
    "grp_core": "Editor e Arquivos Gigantes",
    "grp_lang": "Compiladores e Linguagens Offline",
    "grp_devops": "Web, SQL e DevOps Remoto",
    "nav_home": "Vis\u00e3o Geral",
    "nav_code_editor": "Editor",
    "nav_large_file": "Arquivos GB",
    "nav_python_ide": "Python IDE",
    "nav_c_compiler": "Compilador C",
    "nav_cpp_ide": "C++20 IDE",
    "nav_java_ide": "Java 17",
    "nav_js_ide": "JavaScript",
    "nav_lua_ide": "Lua 5.4",
    "nav_shell_ide": "Shell e Kotlin",
    "nav_web_ide": "Web e PHP",
    "nav_sql_ide": "SQL Studio",
    "nav_git_client": "Git Visual",
    "nav_sftp_client": "SFTP e FTPS",
    "nav_cta": "Google Play",
    "cta_btn": "Baixar no Play",
    "cta_tutorial": "Guia App",
    "bottom_tutorial": "Guia App",
    "bottom_cta": "Baixar",
    "btn_run": "Executar Demo",
    "term_title": "Sa\u00edda do Console Interativo",
    "modal_title": "Selecionar idioma",
    "spec_pkg": "APK Leve",
    "spec_fps": "Rolagem Fluida",
    "spec_themes": "Temas Studio",
    "spec_ui": "Idiomas UI",
    "ce_spec1": "Tipos de Arquivo",
    "ce_spec2": "Barra Adaptativa",
    "ce_spec3": "Teclado S\u00edmbolos",
    "lf_spec1": "Pagina\u00e7\u00e3o em Disco",
    "lf_spec2": "Codifica\u00e7\u00f5es",
    "lf_spec3": "Clipboard 15 MB",
    "lf_spec4": "Busca Fuzzy 50k",
    "py_spec1": "Python Offline",
    "py_spec2": "PyPI + .whl Local",
    "py_spec3": "NumPy e Gr\u00e1ficos",
    "py_spec4": "input() ao Vivo",
    "c_spec1": "GNU -std=gnu17",
    "c_spec2": "Multi-arquivos .c/.h",
    "c_spec3": "Stdlib e math.h",
    "c_spec4": "scanf Interativo",
    "cpp_spec1": "GNU -std=gnu++2a",
    "cpp_spec2": "STL e Smart Ptrs",
    "cpp_spec3": "Cache Incremental",
    "cpp_spec4": "Console Dividido",
    "jv_spec1": "SDK Offline",
    "jv_spec2": "Cache Bytecode",
    "jv_spec3": "JDBC SQLite Nativo",
    "jv_spec4": "Suporte .jar",
    "js_spec1": "Sintaxe ES2024",
    "js_spec2": "ESM e CommonJS",
    "js_spec3": "Anti-Loop <1ms",
    "js_spec4": "Bundler Node",
    "lua_spec1": "Motor Lua Nativo",
    "lua_spec2": "Partida em \u00b5s",
    "lua_spec3": "AST . e :",
    "lua_spec4": "Exemplos Prontos",
    "sh_spec1": "Shell Linux Nativo",
    "sh_spec2": "Bash 5.2 Cloud",
    "sh_spec3": "Runner Kotlin",
    "sh_spec4": "Pasta Sincronizada",
    "web_spec1": "HTTP Local Real",
    "web_spec2": "PHP+SQL Offline",
    "web_spec3": "Streaming WASM",
    "web_spec4": "Celular/Tab/PC",
    "sql_spec1": "9 Modos de Sa\u00edda",
    "sql_spec2": "Inspetor .db",
    "sql_spec3": "60+ Fun\u00e7\u00f5es SQL",
    "sql_spec4": "MySQL 8 Cloud",
    "git_spec1": "Git Nativo Incluso",
    "git_spec2": "Time Machine",
    "git_spec3": "Diff Colorido",
    "git_spec4": "Merge Visual",
    "sf_spec1": "SFTP \u00b7 FTPS \u00b7 FTP",
    "sf_spec2": "Cofre AES-256",
    "sf_spec3": "Salvamento At\u00f4mico",
    "sf_spec4": "4 Fluxos + Resume",
    "sec_cap_eyebrow": "RECURSOS PRINCIPAIS",
    "sec_wf_eyebrow": "COMO USAR PASSO A PASSO",
    "comp_eyebrow": "MATRIZ COMPARATIVA",
    "sec3_eyebrow": "PERGUNTAS E RESPOSTAS",
    "sec3_title": "Perguntas Frequentes (FAQ)",
    "meta_ver": "Feito para Celulares, Dobr\u00e1veis e Tablets \u00b7 Leve 40,2 MB",
    "wf_foot_default": "Android 8.0+ \u00b7 Funciona Offline \u00b7 8 Temas Studio \u00b7 32 Idiomas UI",
    "footer_tagline": "Editor de c\u00f3digo mobile nativo e est\u00fadio de desenvolvimento offline criado para desenvolvedores e estudantes no Android."
  },
  "hi": {
    "htmlLang": "hi",
    "grp_core": "\u0915\u094b\u0921 \u090f\u0921\u093f\u091f\u0930 \u0914\u0930 \u092c\u0921\u093c\u0940 \u092b\u093c\u093e\u0907\u0932\u0947\u0902",
    "grp_lang": "\u0911\u092b\u093c\u0932\u093e\u0907\u0928 \u0915\u0902\u092a\u093e\u0907\u0932\u0930 \u0914\u0930 \u092d\u093e\u0937\u093e\u090f\u0902",
    "grp_devops": "Web, SQL \u0914\u0930 \u0930\u093f\u092e\u094b\u091f DevOps",
    "nav_home": "\u092e\u0941\u0916\u094d\u092f \u092a\u0947\u091c",
    "nav_code_editor": "\u0915\u094b\u0921 \u090f\u0921\u093f\u091f\u0930",
    "nav_large_file": "GB \u092c\u0921\u093c\u0940 \u092b\u093c\u093e\u0907\u0932\u0947\u0902",
    "nav_python_ide": "Python IDE",
    "nav_c_compiler": "C \u0915\u0902\u092a\u093e\u0907\u0932\u0930",
    "nav_cpp_ide": "C++20 IDE",
    "nav_java_ide": "Java 17",
    "nav_js_ide": "JavaScript",
    "nav_lua_ide": "Lua 5.4",
    "nav_shell_ide": "Shell \u0935 Kotlin",
    "nav_web_ide": "Web \u0935 PHP",
    "nav_sql_ide": "SQL \u0938\u094d\u091f\u0942\u0921\u093f\u092f\u094b",
    "nav_git_client": "\u0935\u093f\u091c\u093c\u0941\u0905\u0932 Git",
    "nav_sftp_client": "SFTP \u0935 FTPS",
    "nav_cta": "Google Play",
    "cta_btn": "Google Play \u0938\u0947 \u092a\u093e\u090f\u0902",
    "cta_tutorial": "\u0910\u092a \u0917\u093e\u0907\u0921",
    "bottom_tutorial": "\u0910\u092a \u0917\u093e\u0907\u0921",
    "bottom_cta": "\u092a\u093e\u090f\u0902",
    "btn_run": "\u0921\u0947\u092e\u094b \u091a\u0932\u093e\u090f\u0902",
    "term_title": "\u0907\u0902\u091f\u0930\u0948\u0915\u094d\u091f\u093f\u0935 \u0915\u0902\u0938\u094b\u0932 \u0906\u0909\u091f\u092a\u0941\u091f",
    "modal_title": "\u092d\u093e\u0937\u093e \u091a\u0941\u0928\u0947\u0902",
    "spec_pkg": "\u0939\u0932\u094d\u0915\u093e APK",
    "spec_fps": "\u0938\u094d\u092e\u0942\u0926 \u0935\u094d\u092f\u0942",
    "spec_themes": "\u0938\u094d\u091f\u0942\u0921\u093f\u092f\u094b \u0925\u0940\u092e",
    "spec_ui": "UI \u092d\u093e\u0937\u093e\u090f\u0902",
    "ce_spec1": "\u092b\u093c\u093e\u0907\u0932 \u092a\u094d\u0930\u0915\u093e\u0930",
    "ce_spec2": "\u0938\u094d\u092e\u093e\u0930\u094d\u091f \u091f\u0942\u0932\u094d\u0938",
    "ce_spec3": "\u0938\u093f\u0902\u092c\u0932 \u0915\u0940\u092c\u094b\u0930\u094d\u0921",
    "lf_spec1": "GB \u092a\u0947\u091c\u093f\u0902\u0917 \u0907\u0902\u091c\u0928",
    "lf_spec2": "\u0915\u0948\u0930\u0947\u0915\u094d\u091f\u0930 \u090f\u0928\u094d\u0915\u094b\u0921\u093f\u0902\u0917",
    "lf_spec3": "15 MB \u0915\u094d\u0932\u093f\u092a\u092c\u094b\u0930\u094d\u0921",
    "lf_spec4": "\u092b\u093c\u091c\u093c\u0940 \u092b\u093c\u093e\u0907\u0932 \u0938\u0930\u094d\u091a",
    "py_spec1": "\u0911\u092b\u093c\u0932\u093e\u0907\u0928 Python",
    "py_spec2": "PyPI + \u0932\u094b\u0915\u0932 .whl",
    "py_spec3": "NumPy \u0935 Matplotlib",
    "py_spec4": "\u0932\u093e\u0907\u0935 input()",
    "c_spec1": "GNU C17 \u092e\u093e\u0928\u0915",
    "c_spec2": "\u092e\u0932\u094d\u091f\u0940-\u092b\u093c\u093e\u0907\u0932 .c/.h",
    "c_spec3": "Stdlib \u0935 math.h",
    "c_spec4": "\u0932\u093e\u0907\u0935 scanf",
    "cpp_spec1": "GNU C++20 \u092e\u093e\u0928\u0915",
    "cpp_spec2": "STL \u0935 Smart Ptrs",
    "cpp_spec3": "\u0924\u0947\u091c\u093c \u092c\u093f\u0932\u094d\u0921 \u0915\u0948\u0936",
    "cpp_spec4": "\u0938\u094d\u092a\u094d\u0932\u093f\u091f \u0915\u0902\u0938\u094b\u0932",
    "jv_spec1": "\u0911\u092b\u093c\u0932\u093e\u0907\u0928 SDK",
    "jv_spec2": "\u092c\u093e\u0907\u091f\u0915\u094b\u0921 \u0915\u0948\u0936",
    "jv_spec3": "\u0907\u0928-\u092c\u093f\u0932\u094d\u091f SQLite",
    "jv_spec4": ".jar \u0938\u092a\u094b\u0930\u094d\u091f",
    "js_spec1": "ES2024 \u0938\u093f\u0902\u091f\u0948\u0915\u094d\u0938",
    "js_spec2": "ESM \u0935 CommonJS",
    "js_spec3": "\u0932\u0942\u092a \u0938\u0941\u0930\u0915\u094d\u0937\u093e <1ms",
    "js_spec4": "Node \u0915\u094d\u0932\u093e\u0909\u0921 \u092c\u0902\u0921\u0932\u0930",
    "lua_spec1": "\u0928\u0947\u091f\u093f\u0935 Lua \u0907\u0902\u091c\u0928",
    "lua_spec2": "\u092e\u093e\u0907\u0915\u094d\u0930\u094b\u0938\u0947\u0915\u0902\u0921 \u0930\u0928",
    "lua_spec3": "AST . \u0935 : \u0938\u092a\u094b\u0930\u094d\u091f",
    "lua_spec4": "\u0930\u0947\u0921\u0940 \u0909\u0926\u093e\u0939\u0930\u0923",
    "sh_spec1": "\u0928\u0947\u091f\u093f\u0935 Linux Shell",
    "sh_spec2": "\u0915\u094d\u0932\u093e\u0909\u0921 Bash 5.2",
    "sh_spec3": "Kotlin \u0930\u0928\u0930",
    "sh_spec4": "\u092b\u093c\u094b\u0932\u094d\u0921\u0930 \u0938\u093f\u0902\u0915",
    "web_spec1": "\u0930\u093f\u092f\u0932 \u0932\u094b\u0915\u0932 HTTP",
    "web_spec2": "\u0911\u092b\u093c\u0932\u093e\u0907\u0928 PHP+SQL",
    "web_spec3": "WASM \u0938\u094d\u091f\u094d\u0930\u0940\u092e\u093f\u0902\u0917",
    "web_spec4": "\u092e\u094b\u092c\u093e\u0907\u0932/\u091f\u0948\u092c/PC",
    "sql_spec1": "9 \u091f\u0947\u092c\u0932 \u092e\u094b\u0921",
    "sql_spec2": ".db \u0907\u0902\u0938\u094d\u092a\u0947\u0915\u094d\u091f\u0930",
    "sql_spec3": "60+ SQL \u092b\u093c\u0902\u0915\u094d\u0936\u0928",
    "sql_spec4": "\u0915\u094d\u0932\u093e\u0909\u0921 MySQL 8",
    "git_spec1": "\u0907\u0928-\u092c\u093f\u0932\u094d\u091f Git",
    "git_spec2": "\u0915\u092e\u093f\u091f \u091f\u093e\u0907\u092e \u092e\u0936\u0940\u0928",
    "git_spec3": "\u0915\u0932\u0930 Diff \u0935\u094d\u092f\u0942",
    "git_spec4": "\u0935\u093f\u091c\u093c\u0941\u0905\u0932 \u092e\u0930\u094d\u091c",
    "sf_spec1": "SFTP \u00b7 FTPS \u00b7 FTP",
    "sf_spec2": "AES-256 \u0915\u0940 \u0935\u0949\u0932\u094d\u091f",
    "sf_spec3": "\u090f\u091f\u0949\u092e\u093f\u0915 \u0938\u0947\u0935",
    "sf_spec4": "4 \u0938\u094d\u091f\u094d\u0930\u0940\u092e + \u0930\u093f\u091c\u093c\u094d\u092f\u0942\u092e",
    "sec_cap_eyebrow": "\u092a\u094d\u0930\u092e\u0941\u0916 \u0935\u093f\u0936\u0947\u0937\u0924\u093e\u090f\u0902",
    "sec_wf_eyebrow": "\u0938\u094d\u091f\u0947\u092a-\u092c\u093e\u092f-\u0938\u094d\u091f\u0947\u092a \u0909\u092a\u092f\u094b\u0917 \u0917\u093e\u0907\u0921",
    "comp_eyebrow": "\u0915\u094d\u0937\u092e\u0924\u093e \u0924\u0941\u0932\u0928\u093e \u0924\u093e\u0932\u093f\u0915\u093e",
    "sec3_eyebrow": "\u0938\u0935\u093e\u0932 \u0914\u0930 \u091c\u0935\u093e\u092c",
    "sec3_title": "\u0905\u0915\u094d\u0938\u0930 \u092a\u0942\u091b\u0947 \u091c\u093e\u0928\u0947 \u0935\u093e\u0932\u0947 \u0938\u0935\u093e\u0932 (FAQ)",
    "meta_ver": "\u092b\u093c\u094b\u0928, \u092b\u093c\u094b\u0932\u094d\u0921\u0947\u092c\u0932 \u0914\u0930 \u091f\u0948\u092c\u0932\u0947\u091f \u0915\u0947 \u0932\u093f\u090f \u00b7 \u0939\u0932\u094d\u0915\u093e 40.2 MB",
    "wf_foot_default": "Android 8.0+ \u00b7 \u0911\u092b\u093c\u0932\u093e\u0907\u0928 \u0924\u0948\u092f\u093e\u0930 \u00b7 8 \u0938\u094d\u091f\u0942\u0921\u093f\u092f\u094b \u0925\u0940\u092e \u00b7 32 UI \u092d\u093e\u0937\u093e\u090f\u0902",
    "footer_tagline": "\u0926\u0941\u0928\u093f\u092f\u093e \u092d\u0930 \u0915\u0947 Android \u0921\u0947\u0935\u0932\u092a\u0930\u094d\u0938, \u091b\u093e\u0924\u094d\u0930\u094b\u0902 \u0914\u0930 \u0936\u093f\u0915\u094d\u0937\u0915\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u0928\u093f\u0930\u094d\u092e\u093f\u0924 \u0928\u0947\u091f\u093f\u0935 \u092e\u094b\u092c\u093e\u0907\u0932 \u0915\u094b\u0921 \u090f\u0921\u093f\u091f\u0930 \u0914\u0930 \u0911\u092b\u093c\u0932\u093e\u0907\u0928 IDE\u0964"
  },
  "ru": {
    "htmlLang": "ru",
    "grp_core": "\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0438 \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0444\u0430\u0439\u043b\u044b",
    "grp_lang": "\u041e\u0444\u043b\u0430\u0439\u043d-\u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u044b \u0438 \u044f\u0437\u044b\u043a\u0438",
    "grp_devops": "Web, SQL \u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0439 DevOps",
    "nav_home": "\u041e\u0431\u0437\u043e\u0440",
    "nav_code_editor": "\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440",
    "nav_large_file": "\u0424\u0430\u0439\u043b\u044b \u0413\u0411",
    "nav_python_ide": "Python IDE",
    "nav_c_compiler": "\u041a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440 C",
    "nav_cpp_ide": "C++20 IDE",
    "nav_java_ide": "Java 17",
    "nav_js_ide": "JavaScript",
    "nav_lua_ide": "Lua 5.4",
    "nav_shell_ide": "Shell \u0438 Kotlin",
    "nav_web_ide": "Web \u0438 PHP",
    "nav_sql_ide": "SQL-\u0441\u0442\u0443\u0434\u0438\u044f",
    "nav_git_client": "\u0412\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u044b\u0439 Git",
    "nav_sftp_client": "SFTP \u0438 FTPS",
    "nav_cta": "Google Play",
    "cta_btn": "\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0432 Play",
    "cta_tutorial": "\u0413\u0438\u0434 App",
    "bottom_tutorial": "\u0413\u0438\u0434 App",
    "bottom_cta": "\u0421\u043a\u0430\u0447\u0430\u0442\u044c",
    "btn_run": "\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0434\u0435\u043c\u043e",
    "term_title": "\u0418\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0432\u044b\u0432\u043e\u0434 \u043a\u043e\u043d\u0441\u043e\u043b\u0438",
    "modal_title": "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044f\u0437\u044b\u043a",
    "spec_pkg": "\u041b\u0435\u0433\u043a\u0438\u0439 APK",
    "spec_fps": "\u041f\u043b\u0430\u0432\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d",
    "spec_themes": "\u0422\u0435\u043c\u044b \u0441\u0442\u0443\u0434\u0438\u0438",
    "spec_ui": "\u042f\u0437\u044b\u043a\u0438 UI",
    "ce_spec1": "\u0424\u043e\u0440\u043c\u0430\u0442\u044b \u043a\u043e\u0434\u0430",
    "ce_spec2": "\u0423\u043c\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    "ce_spec3": "\u0421\u0438\u043c\u0432\u043e\u043b-\u043a\u043b\u0430\u0432\u0438\u0448\u0438",
    "lf_spec1": "\u041f\u0435\u0439\u0434\u0436\u0438\u043d\u0433 \u0413\u0411",
    "lf_spec2": "34 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0438",
    "lf_spec3": "\u0411\u0443\u0444\u0435\u0440 15 \u041c\u0411",
    "lf_spec4": "\u041f\u043e\u0438\u0441\u043a 50k \u0444\u0430\u0439\u043b\u043e\u0432",
    "py_spec1": "\u041e\u0444\u043b\u0430\u0439\u043d Python",
    "py_spec2": "PyPI + \u043b\u043e\u043a\u0430\u043b .whl",
    "py_spec3": "NumPy \u0438 \u0433\u0440\u0430\u0444\u0438\u043a\u0438",
    "py_spec4": "\u0416\u0438\u0432\u043e\u0439 input()",
    "c_spec1": "GNU -std=gnu17",
    "c_spec2": "\u041c\u0443\u043b\u044c\u0442\u0438\u0444\u0430\u0439\u043b .c/.h",
    "c_spec3": "Stdlib \u0438 math.h",
    "c_spec4": "\u0416\u0438\u0432\u043e\u0439 scanf",
    "cpp_spec1": "GNU -std=gnu++2a",
    "cpp_spec2": "STL \u0438 \u0443\u043c\u043d\u044b\u0435 \u0443\u043a\u0430\u0437.",
    "cpp_spec3": "\u0425\u044d\u0448-\u043a\u044d\u0448 \u0441\u0431\u043e\u0440\u043a\u0438",
    "cpp_spec4": "\u0421\u043f\u043b\u0438\u0442-\u043a\u043e\u043d\u0441\u043e\u043b\u044c",
    "jv_spec1": "\u041e\u0444\u043b\u0430\u0439\u043d SDK",
    "jv_spec2": "\u041a\u044d\u0448 \u0431\u0430\u0439\u0442\u043a\u043e\u0434\u0430",
    "jv_spec3": "\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 SQLite",
    "jv_spec4": "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 .jar",
    "js_spec1": "\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 ES2024",
    "js_spec2": "\u041c\u043e\u0434\u0443\u043b\u0438 ESM/CJS",
    "js_spec3": "\u0417\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u0446\u0438\u043a\u043b\u043e\u0432",
    "js_spec4": "Node-\u0431\u0430\u043d\u0434\u043b\u0435\u0440",
    "lua_spec1": "\u041d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 Lua",
    "lua_spec2": "\u0421\u0442\u0430\u0440\u0442 \u0437\u0430 \u043c\u043a\u0441",
    "lua_spec3": "AST . \u0438 :",
    "lua_spec4": "\u0413\u043e\u0442\u043e\u0432\u044b\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u044b",
    "sh_spec1": "\u041d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 Shell",
    "sh_spec2": "\u041e\u0431\u043b\u0430\u0447\u043d\u044b\u0439 Bash 5.2",
    "sh_spec3": "\u0417\u0430\u043f\u0443\u0441\u043a Kotlin",
    "sh_spec4": "\u0421\u0438\u043d\u0445\u0440. \u043f\u0430\u043f\u043a\u0438",
    "web_spec1": "\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 HTTP",
    "web_spec2": "\u041e\u0444\u043b\u0430\u0439\u043d PHP+SQL",
    "web_spec3": "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 WASM",
    "web_spec4": "\u041c\u043e\u0431/\u041f\u043b\u0430\u043d\u0448\u0435\u0442/\u041f\u041a",
    "sql_spec1": "9 \u0440\u0435\u0436\u0438\u043c\u043e\u0432 \u0442\u0430\u0431\u043b\u0438\u0446",
    "sql_spec2": "\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 .db",
    "sql_spec3": "60+ SQL-\u0444\u0443\u043d\u043a\u0446\u0438\u0439",
    "sql_spec4": "Cloud MySQL 8",
    "git_spec1": "\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 Git",
    "git_spec2": "\u041c\u0430\u0448\u0438\u043d\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u0438",
    "git_spec3": "\u0426\u0432\u0435\u0442\u043d\u043e\u0439 Diff",
    "git_spec4": "\u0412\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u044b\u0439 Merge",
    "sf_spec1": "SFTP \u00b7 FTPS \u00b7 FTP",
    "sf_spec2": "\u0421\u0435\u0439\u0444 AES-256",
    "sf_spec3": "\u0410\u0442\u043e\u043c\u0430\u0440\u043d\u043e\u0435 \u0441\u043e\u0445\u0440.",
    "sf_spec4": "4 \u043f\u043e\u0442\u043e\u043a\u0430 + \u0434\u043e\u043a\u0430\u0447\u043a\u0430",
    "sec_cap_eyebrow": "\u041a\u041b\u042e\u0427\u0415\u0412\u042b\u0415 \u0412\u041e\u0417\u041c\u041e\u0416\u041d\u041e\u0421\u0422\u0418",
    "sec_wf_eyebrow": "\u041f\u041e\u0428\u0410\u0413\u041e\u0412\u041e\u0415 \u0420\u0423\u041a\u041e\u0412\u041e\u0414\u0421\u0422\u0412\u041e",
    "comp_eyebrow": "\u0422\u0410\u0411\u041b\u0418\u0426\u0410 \u0421\u0420\u0410\u0412\u041d\u0415\u041d\u0418\u042f",
    "sec3_eyebrow": "\u0412\u041e\u041f\u0420\u041e\u0421\u042b \u0418 \u041e\u0422\u0412\u0415\u0422\u042b",
    "sec3_title": "\u0427\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b (FAQ)",
    "meta_ver": "\u0414\u043b\u044f \u0441\u043c\u0430\u0440\u0442\u0444\u043e\u043d\u043e\u0432, \u0441\u043a\u043b\u0430\u0434\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u0438 \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u043e\u0432 \u00b7 \u041b\u0435\u0433\u043a\u0438\u0439 40,2 \u041c\u0411",
    "wf_foot_default": "Android 8.0+ \u00b7 \u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043e\u0444\u043b\u0430\u0439\u043d \u00b7 8 \u0442\u0435\u043c \u0441\u0442\u0443\u0434\u0438\u0438 \u00b7 32 \u044f\u0437\u044b\u043a\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",
    "footer_tagline": "\u041d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u043a\u043e\u0434\u0430 \u0438 \u043e\u0444\u043b\u0430\u0439\u043d-\u0441\u0442\u0443\u0434\u0438\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0434\u043b\u044f \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u043e\u0432, \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432 \u0438 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043d\u0430 Android."
  }
};
  window.__SUPERCODE_LANG_PACKS__ = window.__SUPERCODE_LANG_PACKS__ || {};

  /* 2. UNIVERSAL ROUTER, DEEP LINKS & SPECULATION RULES */
  var ENABLE_DEVICE_LANG_AUTO_DETECT = true;
  var STORAGE_KEY = 'supercode_user_lang_v3';
  var SUPPORTED_LANGS = ['en', 'zh', 'es', 'ja', 'de', 'fr', 'ko', 'pt', 'hi', 'ru'];
  var BASE_DOMAIN = 'https://supercode-ide.github.io';
  var PAGE_KEY_MAP = {"index.html": "index", "code-editor.html": "code_editor", "large-file-editor.html": "large_file", "python-ide.html": "python_ide", "c-compiler.html": "c_compiler", "cpp-ide.html": "cpp_ide", "java-ide.html": "java_ide", "javascript-ide.html": "js_ide", "lua-ide.html": "lua_ide", "shell-ide.html": "shell_ide", "web-ide.html": "web_ide", "sql-ide.html": "sql_ide", "git-client.html": "git_client", "sftp-client.html": "sftp_client", "python-pip-manager.html": "py_pip_manager", "python-offline-libraries.html": "py_libraries", "python-data-science.html": "py_data_science", "python-machine-learning.html": "py_machine_learning", "python-web-scraping-automation.html": "py_automation", "python-projects-workspace.html": "py_workspace", "learn-python-android.html": "py_learn", "c-pointers-memory-coursework.html": "c_pointers_lab", "c-multifile-header-projects.html": "c_multifile", "c-scanf-file-io-console.html": "c_scanf_io", "c-posix-systems-programming.html": "c_posix_sys", "cpp-competitive-programming-stl.html": "cpp_comp_stl", "cpp-oop-smart-pointers-modern.html": "cpp_modern_20", "cpp-multifile-hpp-builder.html": "cpp_multifile", "learn-cpp-offline-android.html": "cpp_learn", "java-17-records-oop-android.html": "jv_records_17", "java-multiclass-packages-ide.html": "jv_multiclass", "java-jdbc-sqlite-file-io.html": "jv_jdbc_sqlite", "learn-java-dsa-android.html": "jv_learn_apcs", "javascript-node-core-modules-offline.html": "js_node_core", "javascript-es2024-async-console.html": "js_es2024_async", "javascript-web-crypto-security.html": "js_crypto_sec", "learn-javascript-dsa-android.html": "js_learn_dsa", "php-server-pdo-sqlite-android.html": "web_php_pdo", "html-css-js-responsive-preview.html": "web_html_preview", "mobile-web-devtools-wasm-studio.html": "web_devtools_wasm", "fullstack-web-sftp-deploy-android.html": "web_sftp_deploy", "sqlite-db-viewer-editor-android.html": "sql_db_viewer", "sql-window-functions-fts5-json.html": "sql_analytics", "mysql-postgresql-syntax-android.html": "sql_mysql_compat", "sql-python-php-java-lua-integration.html": "sql_polyglot_db", "lua-game-scripting-metatables-oop.html": "lua_game_oop", "lua-builtin-modules-cjson-sqlite.html": "lua_ext_mods", "lua-54-bitwise-close-multifile.html": "lua_54_modern", "learn-lua-offline-android.html": "lua_learn", "run-sh-shell-scripts-android-noroot.html": "sh_noroot_runner", "shell-awk-sed-grep-log-pipelines.html": "sh_awk_sed_grep", "kotlin-coding-app-compiler-android.html": "sh_kotlin_ide", "linux-devops-shell-sftp-git-android.html": "sh_devops_sftp"};
  var PRERENDER_URLS = ["index.html", "code-editor.html", "large-file-editor.html", "python-ide.html", "c-compiler.html", "cpp-ide.html", "java-ide.html", "javascript-ide.html", "lua-ide.html", "shell-ide.html", "web-ide.html", "sql-ide.html", "git-client.html", "sftp-client.html", "python-pip-manager.html", "python-offline-libraries.html", "python-data-science.html", "python-machine-learning.html", "python-web-scraping-automation.html", "python-projects-workspace.html", "learn-python-android.html", "c-pointers-memory-coursework.html", "c-multifile-header-projects.html", "c-scanf-file-io-console.html", "c-posix-systems-programming.html", "cpp-competitive-programming-stl.html", "cpp-oop-smart-pointers-modern.html", "cpp-multifile-hpp-builder.html", "learn-cpp-offline-android.html", "java-17-records-oop-android.html", "java-multiclass-packages-ide.html", "java-jdbc-sqlite-file-io.html", "learn-java-dsa-android.html", "javascript-node-core-modules-offline.html", "javascript-es2024-async-console.html", "javascript-web-crypto-security.html", "learn-javascript-dsa-android.html", "php-server-pdo-sqlite-android.html", "html-css-js-responsive-preview.html", "mobile-web-devtools-wasm-studio.html", "fullstack-web-sftp-deploy-android.html", "sqlite-db-viewer-editor-android.html", "sql-window-functions-fts5-json.html", "mysql-postgresql-syntax-android.html", "sql-python-php-java-lua-integration.html", "lua-game-scripting-metatables-oop.html", "lua-builtin-modules-cjson-sqlite.html", "lua-54-bitwise-close-multifile.html", "learn-lua-offline-android.html", "run-sh-shell-scripts-android-noroot.html", "shell-awk-sed-grep-log-pipelines.html", "kotlin-coding-app-compiler-android.html", "linux-devops-shell-sftp-git-android.html"];
  var pendingLoads = {};

  function normalizeLangCode(raw) {
    if (!raw || typeof raw !== 'string') { return ''; }
    var lower = raw.toLowerCase().trim();
    if (lower.indexOf('zh') === 0) { return 'zh'; }
    var prefix = lower.split('-')[0].split('_')[0];
    return SUPPORTED_LANGS.indexOf(prefix) !== -1 ? prefix : '';
  }

  function getCurrentPageInfo() {
    var bodyPage = document.body ? document.body.getAttribute('data-page') : '';
    var path = window.location.pathname || '/';
    var segs = path.split('/').filter(Boolean);
    var last = segs.length ? segs[segs.length - 1] : 'index.html';
    if (SUPPORTED_LANGS.indexOf(last) !== -1) {
      last = 'index.html';
    } else if (last.indexOf('.html') === -1) {
      last = last + '.html';
    }
    return {
      filename: last,
      pageKey: bodyPage || PAGE_KEY_MAP[last] || 'index'
    };
  }

  function detectInitialLanguage() {
    if (window.__SUPERCODE_EN_ONLY_PYTHON_HUB__) {
      return 'en';
    }
    var urlParams = new URLSearchParams(window.location.search);
    var fromUrl = normalizeLangCode(urlParams.get('lang'));
    if (fromUrl) {
      try { window.localStorage.setItem(STORAGE_KEY, fromUrl); } catch (e) { /* ignore */ }
      return fromUrl;
    }
    if (window.__SUPERCODE_STATIC_LANG__) {
      return normalizeLangCode(window.__SUPERCODE_STATIC_LANG__) || 'en';
    }
    try {
      var saved = normalizeLangCode(window.localStorage.getItem(STORAGE_KEY));
      if (saved) { return saved; }
    } catch (e) { /* ignore */ }
    if (ENABLE_DEVICE_LANG_AUTO_DETECT && window.navigator) {
      var navLangs = window.navigator.languages || [window.navigator.language || window.navigator.userLanguage];
      for (var i = 0; i < navLangs.length; i++) {
        var matched = normalizeLangCode(navLangs[i]);
        if (matched) { return matched; }
      }
    }
    return 'en';
  }

  function buildCanonicalUrl(filename, lang) {
    if (window.__SUPERCODE_STATIC_CANONICAL__ && window.__SUPERCODE_STATIC_LANG__ === lang) {
      return window.__SUPERCODE_STATIC_CANONICAL__;
    }
    var cleanFile = (!filename || filename === 'index.html') ? '' : filename;
    if (lang === 'en') {
      return cleanFile ? (BASE_DOMAIN + '/' + cleanFile) : (BASE_DOMAIN + '/');
    }
    return cleanFile ? (BASE_DOMAIN + '/' + lang + '/' + cleanFile) : (BASE_DOMAIN + '/' + lang + '/');
  }

  function syncInternalLinks(lang) {
    var validLang = normalizeLangCode(lang) || 'en';
    var links = document.querySelectorAll('a[href]');
    for (var i = 0; i < links.length; i++) {
      var rawHref = links[i].getAttribute('href');
      if (!rawHref || rawHref.indexOf('http') === 0 || rawHref.indexOf('intent:') === 0 || rawHref.indexOf('#') === 0 || rawHref.indexOf('mailto:') === 0) {
        continue;
      }
      var parts = rawHref.split('#');
      var basePart = parts[0].split('?')[0];
      var hashPart = parts[1] ? '#' + parts[1] : '';
      if (basePart.indexOf('.html') !== -1) {
        var keepClean = (validLang === 'en' || window.__SUPERCODE_STATIC_LANG__ === validLang);
        var nextHref = basePart + (keepClean ? '' : '?lang=' + validLang) + hashPart;
        links[i].setAttribute('href', nextHref);
      }
    }
  }

  function loadLocalePack(lang, callback) {
    if (window.__SUPERCODE_LANG_PACKS__[lang]) {
      callback(window.__SUPERCODE_LANG_PACKS__[lang]);
      return;
    }
    if (pendingLoads[lang]) {
      pendingLoads[lang].push(callback);
      return;
    }
    pendingLoads[lang] = [callback];
    var s = document.createElement('script');
    var prefix = window.__SUPERCODE_STATIC_LANG__ ? '../i18n/' : 'i18n/';
    s.src = prefix + lang + '.js';
    s.async = true;
    s.onload = function () {
      var pack = window.__SUPERCODE_LANG_PACKS__[lang] || {};
      var cbs = pendingLoads[lang] || [];
      delete pendingLoads[lang];
      for (var i = 0; i < cbs.length; i++) { cbs[i](pack); }
    };
    s.onerror = function () {
      var cbs = pendingLoads[lang] || [];
      delete pendingLoads[lang];
      for (var i = 0; i < cbs.length; i++) { cbs[i]({}); }
    };
    document.head.appendChild(s);
  }

  function renderDomWithPack(info, validLang, langPack) {
    var pageDict = (langPack && langPack[info.pageKey]) || {};
    var commonDict = COMMON_UI[validLang] || COMMON_UI.en;

    document.documentElement.lang = commonDict.htmlLang || validLang;
    var canonicalUrl = buildCanonicalUrl(info.filename, validLang);

    if (pageDict.metaTitle) {
      document.title = pageDict.metaTitle;
      var ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) { ogTitle.setAttribute('content', pageDict.metaTitle); }
    }
    if (pageDict.metaDesc) {
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) { metaDesc.setAttribute('content', pageDict.metaDesc); }
      var ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) { ogDesc.setAttribute('content', pageDict.metaDesc); }
    }

    var ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) { ogUrl.setAttribute('content', canonicalUrl); }
    var canLink = document.querySelector('link[rel="canonical"]');
    if (canLink) { canLink.setAttribute('href', canonicalUrl); }

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      var val = (pageDict[key] !== undefined ? pageDict[key] : undefined)
        || (commonDict[key] !== undefined ? commonDict[key] : undefined)
        || (COMMON_UI.en && COMMON_UI.en[key]);
      if (val) { nodes[i].innerHTML = val; }
    }

    var trigSpan = document.getElementById('langTriggerText');
    if (trigSpan) {
      trigSpan.textContent = (validLang === 'zh') ? '\u4E2D\u6587' : validLang.toUpperCase();
    }

    var langOptions = document.querySelectorAll('.lang-option');
    for (var b = 0; b < langOptions.length; b++) {
      langOptions[b].classList.toggle('active', langOptions[b].getAttribute('data-code') === validLang);
    }

    syncInternalLinks(validLang);

    if (window.history && window.history.replaceState && !window.__SUPERCODE_STATIC_LANG__) {
      var newUrl = window.location.pathname + (validLang === 'en' ? '' : '?lang=' + validLang) + window.location.hash;
      window.history.replaceState({ lang: validLang }, '', newUrl);
    }
  }

  function applyUniversalLanguage(lang, isManual) {
    var info = getCurrentPageInfo();
    var validLang = normalizeLangCode(lang) || 'en';

    if (isManual) {
      try { window.localStorage.setItem(STORAGE_KEY, validLang); } catch (e) { /* ignore */ }
    }

    /* Manual language selection on http(s) routes cleanly to the physical static language directory! */
    if (isManual && window.location.protocol.indexOf('http') === 0) {
      if (window.__SUPERCODE_EN_ONLY_PYTHON_HUB__) {
        if (validLang !== 'en') {
          var targetPillar = window.__SUPERCODE_EN_ONLY_PILLAR__ || 'python-ide.html';
          window.location.href = validLang + '/' + targetPillar;
        }
        return;
      }
      var inSubdir = Boolean(window.__SUPERCODE_STATIC_LANG__);
      var cleanTargetFile = (info.filename === 'index.html') ? '' : info.filename;
      if (inSubdir && window.__SUPERCODE_STATIC_LANG__ !== validLang) {
        window.location.href = (validLang === 'en') ? ('../' + cleanTargetFile) : ('../' + validLang + '/' + cleanTargetFile);
        return;
      }
      if (!inSubdir && !window.location.search) {
        if (validLang !== 'en') {
          window.location.href = validLang + '/' + cleanTargetFile;
          return;
        }
      }
    }

    if (window.__SUPERCODE_EN_ONLY_PYTHON_HUB__) {
      return;
    }

    var currentStatic = window.__SUPERCODE_STATIC_LANG__ || 'en';
    if (!isManual && currentStatic === validLang && !window.location.search) {
      syncInternalLinks(validLang);
      return;
    }

    /* Apply Common UI (nav, buttons, trigger) immediately in 0ms, then hydrate full page pack */
    renderDomWithPack(info, validLang, window.__SUPERCODE_LANG_PACKS__[validLang] || null);
    loadLocalePack(validLang, function (pack) {
      renderDomWithPack(info, validLang, pack);
    });
  }

  var PLAY_STORE_WEB_URL = 'https://play.google.com/store/apps/details?id=com.phoenixglobal.supercodeeditor&referrer=utm_source%3Dofficial_web%26utm_medium%3Dseo_v3';
  var TUTORIAL_FALLBACK_URL = 'https://play.google.com/store/apps/details?id=com.phoenixglobal.supercodeeditor&referrer=utm_source%3Dofficial_web%26utm_medium%3Dtutorial_deeplink';
  var ANDROID_TUTORIAL_INTENT = 'intent://supercode-ide.github.io/tutorial?ref=official_web#Intent;scheme=https;package=com.phoenixglobal.supercodeeditor;S.browser_fallback_url=' + encodeURIComponent(TUTORIAL_FALLBACK_URL) + ';end';

  function bindAndroidTutorialDeepLinks() {
    var ua = (window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : '';
    var isAndroid = /Android/i.test(ua);
    var tutLinks = document.querySelectorAll('[data-supercode-tutorial]');
    for (var i = 0; i < tutLinks.length; i++) {
      if (isAndroid) {
        tutLinks[i].setAttribute('href', ANDROID_TUTORIAL_INTENT);
        tutLinks[i].removeAttribute('target');
      } else {
        tutLinks[i].setAttribute('href', TUTORIAL_FALLBACK_URL);
        tutLinks[i].setAttribute('target', '_blank');
        tutLinks[i].setAttribute('rel', 'noopener');
      }
    }
    var playLinks = document.querySelectorAll('a[href^="https://play.google.com/store/apps/details?id=com.phoenixglobal.supercodeeditor"]');
    for (var p = 0; p < playLinks.length; p++) {
      if (!playLinks[p].hasAttribute('data-supercode-tutorial')) {
        playLinks[p].setAttribute('href', PLAY_STORE_WEB_URL);
      }
    }
  }

  function hydrateLivePlayStats() {
    if (!window.fetch || window.location.protocol.indexOf('http') !== 0) { return; }
    var statsUrl = window.__SUPERCODE_STATIC_LANG__ ? '../play-stats.json' : 'play-stats.json';
    window.fetch(statsUrl, { cache: 'no-cache' }).then(function (r) {
      return r.ok ? r.json() : null;
    }).then(function (data) {
      if (!data) { return; }
      if (data.ratingDisplay) {
        var rNodes = document.querySelectorAll('[data-play-rating]');
        for (var i = 0; i < rNodes.length; i++) { rNodes[i].textContent = data.ratingDisplay; }
      }
      if (data.baseSizeMb) {
        var sNodes = document.querySelectorAll('[data-play-size]');
        for (var j = 0; j < sNodes.length; j++) { sNodes[j].textContent = data.baseSizeMb; }
      }
    }).catch(function () { /* silent static fallback */ });
  }

  function injectSeo20Booster() {
    if (HTMLScriptElement.supports && HTMLScriptElement.supports('speculationrules')) {
      var specScript = document.createElement('script');
      specScript.type = 'speculationrules';
      specScript.textContent = JSON.stringify({
        prerender: [{ source: 'list', urls: PRERENDER_URLS, eagerness: 'moderate' }]
      });
      document.head.appendChild(specScript);
    }
  }

  function bootRouter() {
    injectSeo20Booster();
    bindAndroidTutorialDeepLinks();
    hydrateLivePlayStats();
    var modal = document.getElementById('langModal');
    window.openLangModal = function () {
      if (modal) { modal.classList.add('show'); }
      if (window.__supercodeSyncMobileBar) { window.__supercodeSyncMobileBar(); }
    };
    window.closeLangModal = function () {
      if (modal) { modal.classList.remove('show'); }
      if (window.__supercodeSyncMobileBar) { window.__supercodeSyncMobileBar(); }
    };
    if (modal) {
      modal.addEventListener('click', function (e) { if (e.target === modal) { window.closeLangModal(); } });
    }
    window.setLanguage = function (lang) {
      window.closeLangModal();
      applyUniversalLanguage(lang, true);
    };
    var initialLang = detectInitialLanguage();
    applyUniversalLanguage(initialLang, false);
  }

  window.SuperCodeI18nRouter = {
    COMMON_UI: COMMON_UI,
    normalizeLangCode: normalizeLangCode,
    detectInitialLanguage: detectInitialLanguage,
    syncInternalLinks: syncInternalLinks,
    bindAndroidTutorialDeepLinks: bindAndroidTutorialDeepLinks,
    getCurrentPageInfo: getCurrentPageInfo,
    buildCanonicalUrl: buildCanonicalUrl,
    applyUniversalLanguage: applyUniversalLanguage
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootRouter);
  } else {
    bootRouter();
  }
})(); /* End SuperCode V3 Universal Router */
