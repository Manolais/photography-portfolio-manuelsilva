"use client";

import { Typography } from "@material-tailwind/react";

export default function MasonryGridGallery() {
  const images = [
    {
      imageLink:
        "https://img.playbook.com/KT1me7PWFVcQDRAo-v2c0PDG6MboEw1-t6z7GOQiQLE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2ViNjk1ZmY5/LWRlYTUtNGJmYy1i/MTMwLTRmMTA1MWZj/OWFmOA",
      alt: "Repartidor Pedidos Ya en moto"
    },
    {
      imageLink:
        "https://img.playbook.com/V90zfvzhRRlAGw5hy9FfmsrXKNbW14wPNhVylFZKFZI/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzZmYWY3YTRm/LThjMTUtNGRmYy05/ZjM1LWNkMGI4YWFj/NWI0Mw",
      alt: "Mujer prendiedo un cigarrillo"
    },
    {
      imageLink:
        "https://img.playbook.com/1bnakeWUorVfx91K6DVpjkr8yMQjoLKeSuBGJ3uh-pY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2MwZDQ2ZDU5/LTFlY2MtNDg4NC1h/OTU0LWI2MjIzZTNl/Y2Y0Zg",
      alt: "Chica 15 años en el Jardín japones de Buenos Aires"
    },
    {
      imageLink:
        "https://img.playbook.com/CNLcwfNfVFVqtkncznivAYrVA3DLTD7R4ixVq3Uds_U/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzAwYTdlZDA1/LWQyZTUtNGRiZC1h/NjkwLTY5OTc3MzU2/YTYyYQ",
      alt: "Pez Koi en Buenos Aires"
    },
    {
      imageLink:
      "https://img.playbook.com/jceJbA6eVYZTJkZmW8m5qEW2i6_u9r-3zyTjUBKVF4s/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzJmNTFmZjVh/LTdiYzQtNGE0ZS1i/NTFjLTA1YTc0OTVh/ZDZkYw",
      alt: "Escalador con un arbol detrás"
    },
    {
      imageLink:
        "https://img.playbook.com/nkuVYu3MBgXrVbY57zVR2ltYF8NhD5pQ3-2SHWZOt5o/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzE0MDc3Mzc0/LWMwZWYtNGQ2Yi04/ZmY3LTI3MTVjMzE1/MjMzMA",
      alt: "Escalador con un arbol detrás"
    },
    {
      imageLink:
        "https://img.playbook.com/lfyoD3raY1OHUUgNqC81Jst4hiO3tRzsKRtA9e0fIM8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I3MDAwNWEx/LTUyNDAtNGI5NS05/ZmExLWJiMGU5NTRh/OTQ5MA",
      alt: "Escalador con un arbol detrás"
    },
    {
      imageLink:
        "https://img.playbook.com/2vTzKUTDRGS_c9AJxAfVJRJsej0Q1b2lu-q43honjZo/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzNkMTVjNTVk/LTQxYTYtNDA5Ni05/MWIwLTgyZTBmYjNh/NmQwYw",
      alt: "Escalador con un arbol detrás"
    },
    {
      imageLink:
        "https://img.playbook.com/4g_xffJwoyq7yb4JjloxKq_WHvPXzFb8qGMSOBTgzc4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2ZhMDFjMGI0/LWE2MDQtNDNhOC04/Yzk2LTJhYjM0ODA3/MGRiNQ",
      alt: "Escalador con el cielo detrás"
    },
    {
      imageLink:
        "https://img.playbook.com/Pzxr0IS9zRIbWArIj-mUZYnJNgj8DzJTKhs0-zBTbPo/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzEyNzcwNjg0/LTlmZmQtNDkzNy04/MTQzLWEwOWU1Nzcx/ZjQ0ZA",
      alt: "Escaladores con cielo de fondo"
    },
    {
      imageLink:
        "https://img.playbook.com/Rd0Bke_sAIE7hXt2EMd8aO9S8UWvj75-caljQzXZ17o/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzQxOThmMTQz/LTZhYzUtNGYyNy1h/YWM4LWVmNzdhNDRm/OWJiNQ",
      alt: "Escaladores con un arbol de fondo"
    },
    {
      imageLink:
        "https://img.playbook.com/21s_yzz_UCCfKfyet-5yJ0xoesRMUCqCTzh7zmFjmXM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I0OThiZWVk/LTk2YTAtNGQyOC04/YWEwLTFkZDA2YTkz/NzYxMg",
      alt: "Audi de embajada argentina"
    },
    {
      imageLink:
        "https://img.playbook.com/-N_eEw67NeO-MkWpiKtYutp6aMTbQYddkRhKnscEHvM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzIyNmI4MjYy/LTgwYjQtNGY5Ni1i/Y2Q2LWNjOTU5ZjI5/NjdmOQ",
      alt: "Audi de embajada argentina"
    },
    {
      imageLink:
        "https://img.playbook.com/6XmyED3CDq8XO6MVX594WI-jMNdzOifbFGOVNMe9CeE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2QwNGI0Yjg3/LTViMWYtNDJiMy05/NDU0LWJmYmU1MzVl/MDA0MA",
      alt: "Audi de embajada argentina"
    },
    {
      imageLink:
        "https://img.playbook.com/5zAa12lQ_elY3fBqrCsuo11izob5mNTu2pOPr1HcWyw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzA5OTdkMGZi/LTEyMjMtNDA2Yi04/MzlkLTIyOWQ0OGI5/Y2Q1Mg",
      alt: "Venezolano usando gafas"
    },
    {
      imageLink:
        "https://img.playbook.com/qrlhuVVqwu2NvegEwW-q_FieUEWsXZ5KiV2mjxjmbzM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2M1ZGFjOWNh/LWQ4YmYtNDQ5NC04/ZGFjLWVlZGFiODQw/YzkxZA",
      alt: "Venezolano usando gafas"
    },
    {
      imageLink:
        "https://img.playbook.com/v5f4eiN4oBr3sUeiNzAOvR4cHJKFenuA6P4a_ZXAZWQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Y3ZDc3ZGIx/LWQyZGItNDVlMS1h/MDgwLWIwNThiYjc0/NzdlMg",
      alt: "Venezolano usando gafas"
    },
    {
      imageLink:
        "https://img.playbook.com/KxZXb5BlyHV94OZxbEa19onITFNchnhsBgAvqc8P200/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzU0Y2Y1MTUz/LTdlNzktNDNiYS1h/NmY5LTc1Y2Y3NzE3/OGRmNw",
      alt: "Venezolano usando gafas"
    },
    {
      imageLink:
        "https://img.playbook.com/FD6ej_uKuww773tTVYWiWsE1O9K8BnAz1hjHurLTw78/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzhkMDg5Zjk1/LWFiNjYtNGQ2Yy04/YjEzLTMzMzM5ZmI5/NjFkYQ",
      alt: "Venezolano usando gafas"
    },
    {
      imageLink:
        "https://img.playbook.com/ced4TR90cGQRUPyTSHhCasGmCPvyVtp1v2km2XRGsac/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2UwN2I1NWFm/LTcyZjgtNDMyNy04/YzczLTM0YTk0ZWRj/ZTczZA",
      alt: "Hombre con rastas sosteniendo una serpiente"
    },
    {
      imageLink:
        "https://img.playbook.com/O3-LNQJNqEEyGLhRkK1VtVdt71UZoagCTkDiIRMC7ys/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Q2ODZhZTk1/LTRlODUtNGZhYi04/MmYxLTY0Y2U1MDlh/ZDNjMA",
      alt: "Hombre con rastas sosteniendo una serpiente"
    },
    {
      imageLink:
        "https://img.playbook.com/1d3awbRS_XooVTjV_j_1ttAK7h-qJcDpS1bt_hhg_hI/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzVhNzY2MTVj/LWVkNjUtNGU1YS1h/NTcxLWEyYmZhZTZh/MGRlMg",
      alt: "Hombre con rastas sosteniendo una serpiente"
    },
    {
      imageLink:
        "https://img.playbook.com/ODQ1VhVDI7gDpXev5fnXtuvA4mNWHEjTlO2q1dDpQBs/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2UwMmVlMmJi/LTQ3MzYtNGQ4OS04/MjU1LThlNTk1MGZi/NTY0MA",
      alt: "Hombre con rastas sosteniendo una serpiente"
    },
    {
      imageLink:
        "https://img.playbook.com/DJYSZ2_3-1yheWWEDFb0E0VWICFhQByFtobPLhYyLoE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzg2ZjJkMmYy/LTVlZjAtNDA0Mi05/MTBjLWE3N2VlNzlm/YzJkNQ",
      alt: "Hombre con rastas sosteniendo una serpiente"
    },
    {
      imageLink:
        "https://img.playbook.com/mUGyiNqQF00SGFN1fkV3T4AFwnVI4FdhzZppZNu9QgQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2E3N2U5ZDcx/LWE4MDItNGZlNC1i/NmJjLTAzNjBlMmU4/Y2ZhOA",
      alt: "Hombre con rastas sosteniendo una serpiente"
    },
    {
      imageLink:
        "https://img.playbook.com/3nfHrVcZdl7aBV4U5WyMp86R3by9eJCuD8MruWy8t-0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I2MzJlNTgy/LTNkZTctNDk2Yy1i/MjUxLTc1MzNhZTdl/ZGYyNQ",
      alt: "Hombre con rastas sosteniendo una serpiente"
    },
    {
      imageLink:
        "https://img.playbook.com/WrZs0eZiuBaO8PGdlQggE4XuqoLZ4-eoHyS7XGYpgOw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JlODM1NDMy/LTRiYmYtNDFlYi05/YTVjLTQxOWM0NDI2/Y2RiYQ",
      alt: "Serpiente pitón colgando"
    },
    {
      imageLink:
        "https://img.playbook.com/gCfGvjzDYzKGg5RZFaccoA1fpeh9cviNE8VaDi5CXv8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2IyZGYzYTU5/LTQ3MDUtNGYzZC04/Njg4LTRkYmYyOGJh/YjIzZg",
      alt: "Hombre con rastas sosteniendo una serpiente"
    },
    {
      imageLink:
        "https://img.playbook.com/eYFbnBLH64fOyaLr9hnLb_NAjAfe0kVhtZFb_Or0BAA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzFmZTQwOTZm/LWQwYWEtNGM3Ni04/MzU1LWEzNzFlYTBi/YWZhOQ",
      alt: "Hombre con rastas sosteniendo una serpiente"
    },
    {
      imageLink:
        "https://img.playbook.com/jXw9YS-SoQwa7aGp4k1XFeH75pZW7KMyqWqUCPd2o2U/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I5MzZmMjM4/LTJkNTQtNGJhNC04/ZDFlLTAwZThiOGVk/YzdiOA",
      alt: "Hombre con rastas sosteniendo una serpiente"
    },
    {
      imageLink:
        "https://img.playbook.com/7L10CVMu-hTpaSsp_14_tihnbUNvINsl-ISnUUn9gZ0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzViN2EyODZi/LTBhN2UtNGNkYi04/YTAyLTMwZTYzNWE2/ODU0Mw",
      alt: "Hombre con rastas sosteniendo una serpiente"
    },
    {
      imageLink:
        "https://img.playbook.com/0LmJp6zCLw1EwHl2SNH23aUm-ogYaIU1VyoqSrRm_Sk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzdjMjhkNWY1/LTBkYzUtNDAwMi05/NWUyLWFjMjA4YjJh/MDAxNw",
      alt: "Hombre con rastas sosteniendo una serpiente"
    },
    {
      imageLink:
        "https://img.playbook.com/R9bsyTChvBvU0AdnOTeNIIx_MvEML5zfEfsYfx-0L7g/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzg1OTc2N2Zj/LTQyZjMtNGVmMy1h/N2JhLTU2NzA3YmQz/YTI0OA",
      alt: "Hombre con rastas sosteniendo una serpiente"
    },
    {
      imageLink:
        "https://img.playbook.com/KJcWY1dBN_fypTOujq2c6rKAIrT4TydB_5iXMQPCfEw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzYzYjdiZmU1/LTE1NmUtNDVlYS1i/YWFmLTUyYjU3YThi/NWYxZA",
      alt: "Hombre con rastas sosteniendo una serpiente"
    },
    {
      imageLink:
        "https://img.playbook.com/Yvk6jh5VQ4W2ftNhdz_lkkHtUx842IlvxVGv-oVYM9M/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2E1OWQ0NmQz/LTc0ODUtNDIwOC1i/MGQ0LTMzNTg1NDY0/YzgwNg",
      alt: "Hombre debajo de un arco"
    },
    {
      imageLink:
        "https://img.playbook.com/YVDYrmv2tNSk4y-yBenB8R6V3xaVxyCxPElmBMJveKc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzhmMGFlOTRk/LWNhM2ItNDZhZS1i/OWIwLWFjNGU2Zjg2/YzliZg",
      alt: "Hombre despistado mirando a un costado"
    },
    {
      imageLink:
        "https://img.playbook.com/MBDzrkjOomBEys8q5jIBMHYoBcL6aED8lSvvVlrDfL8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzE2ZDg2YTJk/LTYyOGItNDRjMC1h/NmVlLTkzMmEwN2Rk/ZGJiZA",
      alt: "Retrato de un hombre sonriendo"
    },
    {
      imageLink:
        "https://img.playbook.com/TNMWmsIYfkaG7ZYlH3M6tsTNoaAztyjKEFYVOrwDlLQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Y1YWJjODli/LTgzOTQtNDM3YS04/MzI0LWE0ZDg2NDYy/OTM0NA",
      alt: "Retrato de un hombre con cara neutral"
    },
    {
      imageLink:
        "https://img.playbook.com/r4xcBk0GClDIPxP39RBdJHJhAsk6VHVgnIqHhqTp-Qw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2FkYzE5Mzgw/LTljYjUtNDg3OS04/Y2Q4LTQ2NjE2MzZl/YWI5MQ",
      alt: "Hombre concentrado en el pool"
    },
    {
      imageLink:
        "https://img.playbook.com/uMWzc2HUwM_o8pdKAYEZNGb1kCUk-QKyVxu-KEfixUM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzNiYjlmYTcy/LTg1NTctNDFjMS04/MDgxLTI1OTM3NTQw/NTFjMQ",
      alt: "Hombre mirando a mesa de pool"
    },
    {
      imageLink:
        "https://img.playbook.com/NowmabtP4623mudWfhEjdyPZhmbF80qi6Y_FvlPAnT4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzQyYmY2ZWY5/LWU2ODYtNDgyMy04/NTk3LTE5ODBhNGM3/NjExMg",
      alt: "Mujer con remera de lisa simpsion"
    },
    {
      imageLink:
        "https://img.playbook.com/D-ZKXT55IxfWqOJ-dgikMb_Q0FxtikfifuCaU5UkFmo/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Y0NDM2MjQ0/LTJlZjYtNDdiMC05/MTlmLTcyMzQyNTg2/ODAxZA",
      alt: "Hombre a punto de golpear bola de pool"
    },
    {
      imageLink:
        "https://img.playbook.com/u4pjhRTqHiK7tuYe1XqUTPwTQpr93GNr5xATZdJ4TzQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2ZhNjJlNWQ0/LTExODktNGQ0Ny04/MzgyLWE2YTBhM2Rm/M2U1NA",
      alt: "Hombre que acaba de tirar una bola de pool"
    },
    {
      imageLink:
        "https://img.playbook.com/Qb-M5GfDDsB6wKjRQwf0RoZqp8_B8-qNI1eVLw6C3H0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzMxZjhhNjFk/LWE3ZTgtNDU5OS1i/ODNmLTc1YTljNjhj/NTViZQ",
      alt: "Bola roja de pool"
    },
    {
      imageLink:
        "https://img.playbook.com/Y4iV9DQdlZ4BiPT5x0L78BGpvAAB84ni4XKtCAqpIlU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2EyMDcwMTU4/LTc4N2MtNDIxYS1i/NDFkLWQwZmJmYjc0/Y2RiOQ",
      alt: "Hombre alemán a punto de golpear una bola de pool"
    },
    {
      imageLink:
        "https://img.playbook.com/UCopAZ3nw-1F5Op77ku8qrbTVubJRujk81xIhSxmvXw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2ZkODhjMGI4/LTFlNDctNDk0Mi1i/OWZhLWQ1YjhiOTk1/OTY4MA",
      alt: "Hombre alemán a punto de golpear una bola de pool"
    },
    {
      imageLink:
        "https://img.playbook.com/eZa7XFgrAaWkzMd1O5viloT8sXcwZfkHO9NOPN1fwvQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzEyZDFkNjlk/LWJlODYtNDA4My1h/Y2E4LWE5OTk1ODBk/YWVlMw",
      alt: "Retrato de una mujer con un arbol detrás"
    },
    {
      imageLink:
        "https://img.playbook.com/5CwtwhBizBxO2qED8GUgWqplMphcp82z8LpW8INBB1g/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzBhZDFhMzcy/LTZhNzktNGI3Ni1i/ODg1LTdiZWM5NGMy/OTE4NA",
      alt: "Retrato de una mujer con el glare del sol de fondo"
    },
    {
      imageLink:
        "https://img.playbook.com/KLMRb3lR5Q2yK7Xb4Elv2pbIxUwRENhA3B19UUwRWic/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzRhMTMzM2Q1/LWY5MWQtNDQwOS1i/NTcwLWVlMmY3N2Nl/YWViNA",
      alt: "Retrato de una mujer con el glare del sol de fondo"
    },
    {
      imageLink:
        "https://img.playbook.com/v3kHQMIZ5_Dq2sMJTqyeP_dxyUnBVgv224Bx-Nw2dg8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2M5MGQ0ZjRl/LTAzZTUtNDk3MS05/YjYyLTNiODdiNzc1/ZWFlOA",
      alt: "Mujer mirando seriamente"
    },
    {
      imageLink:
        "https://img.playbook.com/rLiL4fwkL8SVd7kt5UHgbilUBGtKi0_LInyllX1nKBc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2U3NTZmYmE4/LWZmYTAtNGFjZi1i/YjQwLTVjNWYxOGJi/MDdiZQ",
      alt: "Retrato de una mujer con un arbol detrás"
    },
    {
      imageLink:
        "https://img.playbook.com/OaGCMiVG01KK9eGXmzPnAUoQC5qZTdfi12iWPRxRgyM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2ZkYmIyYjFi/LWE3NGEtNGJiMi05/ZDY5LWM3MGY0MjM5/YzM5Mg",
      alt: "Retrato de una mujer con flores en frente"
    },
    {
      imageLink:
        "https://img.playbook.com/IlJ-xtxIUttupMRJPERh0STjJb4rUJANVrmK7KgcEFY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzNlMmZkMGEw/LTIxNzItNDc3NC05/OWYwLTUxMzNmMDU1/ZDAyNw",
      alt: "Retrato de una mujer con anteojo delante de un tronco"
    },
    {
      imageLink:
        "https://img.playbook.com/yKsdbRBxZfZ2JdAS-RjcFJ3A-BZA5TZXCXKoI-HOsgw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2U5OGE4YzVl/LTg2NDQtNDYzZC04/NzZjLTdlOTg5OTQ2/OWRhYw",
      alt: "Retrato de una mujer con el glare del sol de fondo"
    },
    {
      imageLink:
        "https://img.playbook.com/aFlwctaNyHhwutrx5c5kaMNXEMXYnbn9lAKdU2VwSUU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzUyMTk3ZjJh/LWNhOWYtNGY2Zi1i/MzI2LTY3YWY1YWE0/YmMxZQ",
      alt: "Retrato de una mujer con flroes detras mirando al cielo"
    },
    {
      imageLink:
        "https://img.playbook.com/XO0XTUuSLwRxRlqROVoKy2GhOeU003E6JPmoGP_s4XQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzQyODJmNzVj/LWQ2ZWYtNDY4Yy1h/MDc2LWE0OTBhYTVk/ODI2YQ",
      alt: "Retrato de una mujer tranqula mirando al horizonte"
    },
  ];

  return (
    <div className="pr-5 pl-5">
      <section className="text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Album
          </Typography>
      </section>
      {/* <section className="container mx-auto mb-8">
        <form>   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input 
              type="search" 
              id="default-search" 
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-zinc-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-zinc-600 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>
      </section> */}
      <section className="container mx-auto overflow-y-scroll max-h-svh">
        <div className="columns-1 gap-4 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          {images.map(({ imageLink, alt }, index) => (
            <img
              data-tag={["Hola", "Mundo"]}
              key={index}
              loading="lazy"
              width={360}
              height={450}
              className="h-auto max-w-full rounded-lg"
              src={imageLink}
              alt={alt || ""}
            />
          ))}
        </div>
      </section>
    </div>
  );
}