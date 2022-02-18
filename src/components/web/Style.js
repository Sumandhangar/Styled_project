const converted = {
    '@import url("https://fonts.googleapis.com/css2?family=Pangolin&display=swap")': true,
    ":root": {
      "--accent": "hsla(15, 48%, 37%, 100%)",
      "--bu": "calc(1rem + max(1vh, 1vw))",
      "--linear": "linear-gradient(45deg, #bd5ff2, #6287f6)"
    },
    "*": { fontFamily: '"Pangolin"' },
    html: { scrollBehavior: "smooth" },
    body: { margin: "0", padding: "0", boxSizing: "border-box" },
    button: { border: "none", outline: "none" },
    "button:focus": { outline: "none !important" },
    ".peragraph p": { fontSize: "1.2rem", lineHeight: "1.5rem" },
    "#heading": { fontSize: "3.5rem", fontWeight: 900, color: "#485be6" },
    ".heading": { color: "#485be6" },
    "#about": { marginBottom: "5rem", paddingBottom: "5rem" },
    ".skew": { transform: "skew(-20deg)" },
    ".un-skew": { transform: "skew(20deg)" },
    "#nav-wrapper": {
      overflow: "hidden",
      width: "100%",
      margin: "0 auto",
      position: "fixed",
      top: "0",
      left: "0",
      zIndex: 100,
      boxShadow: "2px 2px 4px 0px #cacaca"
    },
    "#nav": {
      backgroundColor: "#fff",
      boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      height: "4em",
      overflow: "hidden"
    },
    "#nav.nav-visible": { height: "100%", overflow: "auto" },
    ".nav": { display: "flex", height: "5em", lineHeight: "4em", flexGrow: 1 },
    ".nav-link,\n.logo": { padding: "0 1em" },
    "span.gradient": {
      background: ["#bd5ff2", "linear-gradient(45deg, #bd5ff2, #6287f6)"],
      padding: "0 1em",
      position: "relative",
      right: "1em",
      marginRight: "auto"
    },
    "span.gradient:hover": {
      animationName: "logo-hover",
      animationDuration: "0.3s",
      animationFillMode: "forwards",
      animationTimingFunction: "cubic-bezier(0.17, 0.57, 0.31, 0.85)"
    },
    "h1.logo": {
      fontWeight: 300,
      fontSize: "1.75em",
      lineHeight: "0.75em",
      color: "#fff"
    },
    "h1.logo a,\na:active,\na:hover,\na:visited": {
      textDecoration: "none",
      color: "#fff"
    },
    ".nav-link": {
      textTransform: "uppercase",
      textAlign: "center",
      borderTop: "0.5px solid #ddd"
    },
    "a:link,\na:visited,\na:active": { textDecoration: "none", color: "#485be6" },
    "a:hover": { textDecoration: "underline" },
    "@media screen and (min-width: 800px)": {
      "#nav-wrapper": { overflow: "hidden" },
      "#nav": { overflow: "hidden", flexDirection: "row" },
      ".nav-link": {
        borderTop: "none",
        textShadow: "2px 2px 4px #6287f6",
        fontSize: "larger",
        transform: "skew(-20deg)",
        color: "#777",
        textDecoration: "none"
      },
      ".right": {
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: "flex-end",
        position: "relative",
        left: "1.5em",
        height: "auto"
      },
      ".btn-nav": { display: "none" },
      ".nav a:link.active,\n  a:visited.active,\n  a:active.active": {
        background: ["#bd5ff2", "linear-gradient(45deg, #bd5ff2, #6287f6)"],
        color: "#fff"
      },
      ".nav-link-span": { transform: "skew(20deg)", display: "inline-block" },
      ".nav-link:last-child": { paddingRight: "3em" },
      "a:hover.nav-link:not(.active)": {
        color: "#444",
        background: ["#ddd", "linear-gradient(45deg, #fff, #ddd)"]
      }
    },
    "@keyframes logo-hover": {
      "20%": { paddingRight: "0em" },
      "100%": { paddingRight: "5em" }
    },
    "@keyframes ring": {
      "0%": {
        backgroundPosition:
          "calc(50% - 5em) 50%,\n       calc(50% - 2.5em) calc(50% - 1.5em),  50% calc(50% - 2em),\n       calc(50% + 2.5em) calc(50% - 1.5em),  calc(50% - 5em) 50%,\n       calc(50% - 2.5em) calc(50% + 1.5em),  50% calc(50% + 2em),\n       calc(50% + 2.5em) calc(50% + 1.5em),  0 50%, 0 50%"
      },
      "100%": {
        backgroundPosition:
          "calc(50% - 2.5em) calc(50% - 1.5em),\n       50% calc(50% - 2em),  calc(50% + 2.5em) calc(50% - 1.5em),\n       calc(50% + 5em) 50%,  calc(50% - 2.5em) calc(50% + 1.5em),\n       50% calc(50% + 2em),  calc(50% + 2.5em) calc(50% + 1.5em),\n       calc(50% + 5em) 50%,  0 50%, 0 50%"
      }
    },
    ".rays": {
      width: "100%",
      top: "0",
      left: "0",
      background:
        'url("../../assets/img/Graphic-Purple-Wave.svg") 100%,\n    url("../../assets/img/Graphic-Blue-Wave.svg") 100%,\n    url("../../assets/img/Graphic-Teal-Wave.svg") 100%,\n    url("../../assets/img/Graphic-Hero-Blur.jpg") 100%'
    },
    ".section": { width: "100%", transition: "0.5s", height: "600px" },
    ".section img": {
      position: "absolute",
      width: "95%",
      transition: "0.5s",
      marginTop: "5rem"
    },
    ".section .up": { marginTop: "9.5rem", transition: "all 0.5s linear-out" },
    ".heading h1": {
      fontSize: "5vw",
      fontWeight: 900,
      textShadow: "0 0 5px #0000ff"
    },
    ".button, .btn-primary": { textShadow: "2px 2px 4px #000" },
    ".button:hover": {
      background: "linear-gradient(270deg, #2e37b8 50%, #e600e6 0) 100%",
      backgroundSize: "200%",
      color: "#fff !important",
      transition: "0.5s linear",
      textShadow: "2px 2px 4px #000"
    },
    ".columns .column:nth-child(even)": { justifySelf: "center" },
    ".column": {
      borderTopLeftRadius: "0.3rem",
      borderBottomLeftRadius: "0.3rem",
      borderBottomRightRadius: "0.3rem",
      transition: "all 0.8s",
      background: "#f8f9fa",
      cursor: "pointer"
    },
    ".column:hover": {
      boxShadow: "0 4px 8px rgb(212, 211, 211)",
      background: 'url("../../assets/img/magicpattern-blob-3.png")',
      backgroundPosition: "right bottom",
      transition: "all 0.8s"
    },
    ".box-heading": { color: "#485be6" },
    ".btn-primary": { background: "linear-gradient(45deg, #a12fe2, #2452dd)" },
    ".btn-primary:hover": {
      background: "linear-gradient(270deg, #2e37b8 50%, #e600e6 0) 100%",
      transition: "0.5s linear",
      backgroundSize: "200%"
    },
    ".box": {
      top: "0px",
      position: "absolute",
      right: "14px",
      height: "80px",
      width: "80px",
      clipPath: "polygon(0 0, 100% 100%, 100% 0)",
      zIndex: 2,
      backgroundColor: "white"
    },
    ".box .svg-corner": {
      position: "absolute",
      top: "-9",
      left: "0",
      zIndex: -1,
      WebkitTransition: "0.1s all linear-in",
      transition: "0.1s all linear-in"
    },
    ".right-corner-icon": {
      top: "-9px",
      position: "absolute",
      right: "-10px",
      height: "80px",
      width: "80px",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 67% 100%, 0 33%)"
    },
    ".corner-icon": {
      background: "var(--linear)",
      borderRadius: "50%",
      height: "50px",
      width: "50px",
      position: "relative",
      top: "19px",
      WebkitTransition: "0s all linear-in",
      transition: "0s all linear-in",
      left: "9px"
    },
    ".corner-icon i": {
      fontWeight: 900,
      paddingTop: "0.4rem",
      paddingLeft: "0.3rem"
    },
    ".work": { marginTop: "-5rem" },
    ".left-content": { marginTop: "7rem" },
    ".left-content .subheading": {
      textTransform: "uppercase",
      color: "#485be6",
      fontWeight: 600
    },
    ".left-content .content": { fontSize: "larger" },
    ".right-section": {
      height: "auto",
      paddingTop: "4rem",
      paddingBottom: "29rem"
    },
    ".text": { textAlign: "center", overflow: "hidden" },
    ".text .demo": {
      fontSize: "15px",
      textAlign: "justify center",
      wordSpacing: "0px"
    },
    ".hexagon": {
      left: "55%",
      marginTop: "3rem",
      position: "absolute",
      backgroundColor: "#bb42ff",
      borderRadius: "0.9rem",
      width: "15rem",
      height: "9.2rem",
      zIndex: -1,
      animation: "changebg 5s linear infinite"
    },
    ".hexagon:before,\n.hexagon:after": {
      content: '""',
      position: "absolute",
      top: "-0.1vh",
      left: "-0.1vh",
      backgroundColor: "#bb42ff",
      borderRadius: "inherit",
      height: "100%",
      width: "100%",
      zIndex: -1,
      animation: "changebg 5s linear infinite"
    },
    ".hexagon:before": { transform: "rotate(60deg)" },
    ".hexagon:after": { transform: "rotate(-60deg)" },
    ".hexagon2": {
      left: "6rem",
      position: "absolute",
      backgroundColor: "#00b6e9",
      borderRadius: "0.9rem",
      width: "15rem",
      height: "9.2rem",
      zIndex: -1,
      animation: "changebg-2 5s linear infinite"
    },
    ".hexagon2:before,\n.hexagon2:after": {
      content: '""',
      position: "absolute",
      top: "-0.1vh",
      left: "-0.1vh",
      backgroundColor: "#00b6e9",
      borderRadius: "inherit",
      height: "100%",
      width: "100%",
      zIndex: -1,
      animation: "changebg-2 5s linear infinite"
    },
    ".hexagon2:before": { transform: "rotate(60deg)" },
    ".hexagon2:after": { transform: "rotate(-60deg)" },
    ".hexagon3": {
      left: "11rem",
      marginTop: "38%",
      position: "absolute",
      backgroundColor: "#485be6",
      borderRadius: "0.9rem",
      width: "15rem",
      height: "9.2rem",
      zIndex: -1,
      animation: "changebg-3 5s linear infinite"
    },
    ".hexagon3:before,\n.hexagon3:after": {
      content: '""',
      position: "absolute",
      top: "-0.1vh",
      left: "-0.1vh",
      backgroundColor: "#485be6",
      borderRadius: "inherit",
      height: "100%",
      width: "100%",
      zIndex: -1,
      overflowY: "0",
      animation: "changebg-3 5s linear infinite"
    },
    ".hexagon3:before": { transform: "rotate(60deg)" },
    ".hexagon3:after": { transform: "rotate(-60deg)" },
    ".hexa-bottom-row": { marginTop: "5rem" },
    ".right-content": { marginTop: "3rem" },
    ".right-content .subheading": {
      textTransform: "uppercase",
      color: "#485be6",
      fontWeight: 600
    },
    ".right-content .content": { fontSize: "larger" },
    ".div-1": {
      background: "url(../../assets/img/blob-background-column.png), skyblue",
      backgroundPosition: "left",
      textAlign: "center",
      width: "250px",
      padding: "25px 15px 15px 15px",
      transition: "0.5s ease",
      color: "white"
    },
    ".div-2": {
      background: "url(../../assets/img/blob-background-column.png), skyblue",
      backgroundPosition: "right",
      textAlign: "center",
      width: "250px",
      padding: "25px 15px 15px 15px",
      cssFloat: "right",
      marginTop: "-5rem",
      marginRight: "7rem",
      color: "white"
    },
    ".div-3": {
      background: "url(../../assets/img/blob-background-column.png), skyblue",
      backgroundPosition: "bottom",
      textAlign: "center",
      width: "250px",
      padding: "25px 15px 15px 15px",
      color: "white"
    },
    "@keyframes changebg": {
      "33%": { backgroundColor: "#485be6" },
      "66%": { backgroundColor: "#00b6e9" },
      "100%": { backgroundColor: "#bb42ff" }
    },
    "@keyframes changebg-2": {
      "33%": { backgroundColor: "#bb42ff" },
      "66%": { backgroundColor: "#485be6" },
      "100%": { backgroundColor: "#00b6e9" }
    },
    "@keyframes changebg-3": {
      "33%": { backgroundColor: "#00b6e9" },
      "66%": { backgroundColor: "#bb42ff" },
      "100%": { backgroundColor: "#485be6" }
    },
    ".linearbg": {
      height: "500px",
      width: "100%",
      background: ["#bd5ff2", "linear-gradient(45deg, #bd5ff2, #6287f6)"],
      animation: "linearbg 4s linear infinite"
    },
    ".linear-overlay": {
      height: "500px",
      width: "100%",
      border: "5px",
      background: "white",
      clipPath: "polygon(0 0, 97% 3%, 100% 100%, 3% 97%)",
      animation: "clippath 3s linear infinite"
    },
    ".contact-content": { marginTop: "4rem" },
    ".contact-content .subheading": {
      textTransform: "uppercase",
      color: "#485be6",
      fontWeight: 600
    },
    ".contact-content .content": { fontSize: "larger" },
    "@keyframes linearbg": {
      "0%": {
        background: ["#bd5ff2", "linear-gradient(45deg, #bd5ff2, #6287f6)"]
      },
      "50%": {
        background: [
          "rgb(189, 95, 242)",
          "linear-gradient(\n      149deg,\n      rgba(189, 95, 242, 1) 42%,\n      rgba(98, 135, 246, 1) 71%\n    )"
        ]
      },
      "100%": {
        background: [
          "rgb(189, 95, 242)",
          "linear-gradient(\n      235deg,\n      rgba(189, 95, 242, 1) 42%,\n      rgba(98, 135, 246, 1) 71%\n    )"
        ]
      }
    },
    "@keyframes clippath": {
      "0%": { clipPath: "polygon(3% 3%, 100% 0%, 97% 97%, 0% 100%)" },
      "50%": { clipPath: "polygon(0 0, 97% 3%, 100% 100%, 3% 97%)" },
      "100%": { clipPath: "polygon(3% 3%, 100% 0%, 97% 97%, 0% 100%)" }
    },
    ".main-box": {
      position: "relative",
      flexBasis: "75%",
      borderRadius: "var(--bu)",
      height: "20rem",
      width: "80%",
      backgroundColor: "lightblue",
      paddingTop: "1px",
      cssFloat: "right"
    },
    ".box-inner": {
      height: "13rem",
      width: "16vw",
      marginTop: "3.5rem",
      marginLeft: "4%",
      position: "absolute",
      transform: "rotate(43deg)"
    },
    ".animated-content": {
      paddingLeft: "6rem",
      paddingRight: "1rem",
      position: "absolute",
      width: "95%",
      height: "90%",
      overflow: "hidden",
      marginLeft: "2rem"
    },
    ".title": {
      position: "absolute",
      inset: "auto 0 30%",
      color: "#2e37b8",
      paddingLeft: "80px",
      transition: "bottom 500ms 300ms ease-in-out"
    },
    ".title::before": {
      content: '""',
      position: "absolute",
      top: "3rem",
      right: "5%",
      width: "70%",
      height: "5px",
      borderRadius: "2.5px",
      backgroundColor: "#2e37b8",
      transition: "width 500ms 300ms ease-in-out"
    },
    ".box-inner img": { borderRadius: "30px" },
    ".bordered:hover .box-inner img": {
      scale: "1.1",
      transition: "scale 500ms ease-in-out, transform 500ms ease-in-out"
    },
    ".bordered:hover .title": {
      bottom: "60%",
      transition: "bottom 500ms ease-in"
    },
    ".bordered:hover .title::before": {
      width: "0%",
      transition: "width 500ms 300ms ease-out"
    },
    ".main-box .text": {
      position: "absolute",
      top: "100%",
      padding: "0 calc(var(--bu) * 0.5)",
      transition: "top 500ms ease-in"
    },
    ".bordered:hover .main-box .text": {
      top: "37%",
      transition: "top 500ms 300ms ease-out"
    },
    ".bordered:hover .main-box .title .arrow": {
      transition: "300ms ease-in",
      transform: "rotateX(180deg)"
    },
    ".list-item": {
      height: "400px",
      width: "60px",
      marginRight: "0.8rem",
      transition: "width 0.5s ease",
      borderRadius: "25px",
      cursor: "pointer",
      overflow: "hidden",
      background:
        'url("../../assets/img/flower1-removebg-preview.png"),\n    linear-gradient(45deg, #bd5ff2, #6287f6)',
      backgroundBlendMode: "luminosity",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    },
    ".activate": { width: "500px" },
    ".fa-arrow-alt-circle-right": {
      animation: "pulse-animation 0.5s linear infinite alternate",
      borderRadius: "50%"
    },
    "@keyframes pulse-animation": {
      "0%": { boxShadow: "0 0 0 0px rgba(0, 0, 0, 0.2)" },
      "100%": { boxShadow: "0 0 0 15px rgba(0, 0, 0, 0)" }
    },
    "@media screen and (min-width: 1025px) and (max-width: 1200px)": {
      ".right-section": { height: "auto", top: "10rem" },
      ".hexagon": { marginTop: "-2rem" },
      ".hexagon2": { marginTop: "-7rem", marginLeft: "-3rem" },
      ".hexagon3": { marginLeft: "-5rem", marginTop: "10rem" },
      ".hexa-bottom-row": { marginTop: "10rem" }
    },
    "@media screen and (min-width: 768px) and (max-width: 1024px)": {
      ".right": { display: "flex", flexDirection: "column", height: "100%" },
      ".btn-nav": { color: "#f857a8", paddingLeft: "2em", paddingRight: "2em" },
      ".rays": {
        width: "100%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        background:
          'url("../../assets/img/Graphic-Purple-Wave.svg") 100%,\n      url("../../assets/img/Graphic-Blue-Wave.svg") 100%,\n      url("../../assets/img/Graphic-Teal-Wave.svg") 100%,\n      url("../../assets/img/Graphic-Hero-Blur.jpg") 100%'
      },
      ".section": { width: "100%", height: "750px", marginBottom: "7rem" },
      ".content": {
        textAlign: "center",
        paddingTop: "3rem",
        paddingRight: "0.5rem",
        marginTop: "-3rem"
      },
      ".heading h1": { fontSize: "7vw", fontWeight: 900 },
      ".left-content": { textAlign: "center", marginTop: "2rem" },
      ".right-section": { top: "2rem" },
      ".hexagon": { marginTop: "5rem", marginRight: "5rem" },
      ".hexagon2": { marginLeft: "1rem" },
      ".hexagon3": { left: "25vw", marginTop: "18rem" },
      ".hexa-bottom-row": { marginTop: "10rem" },
      ".box-md": {
        top: "0px",
        position: "absolute",
        right: "60px",
        height: "80px",
        width: "80px",
        clipPath: "polygon(0 0, 100% 100%, 100% 0)",
        zIndex: 2,
        backgroundColor: "white"
      },
      ".div-1,\n  .div-3": { marginLeft: "4rem" },
      ".div-2": { marginRight: "4rem" },
      ".right-content": { marginTop: "2rem", textAlign: "center" },
      ".box-inner": {
        height: "14rem",
        width: "35vw",
        borderRadius: "var(--bu)",
        transform: "rotate(0deg)",
        marginTop: "2.8rem",
        marginLeft: "0%"
      },
      ".main-box-2": { cssFloat: "left" },
      ".box-inner-2": { right: "12px", borderRadius: "var(--bu)" },
      ".animated-content": { right: "0rem" },
      ".animated-content-2": { right: "8rem" },
      ".bordered:hover .main-box .text": {
        top: "30%",
        transition: "top 500ms 300ms ease-out"
      }
    },
    "@media screen and (min-width: 360px) and (max-width: 767px)": {
      ".right": { display: "flex", flexDirection: "column", height: "100%" },
      ".btn-nav": { color: "#f857a8", paddingLeft: "2em", paddingRight: "2em" },
      ".rays": {
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        background:
          'url("../../assets/img/Graphic-Purple-Wave.svg")top 50%,\n      url("../../assets/img/Graphic-Blue-Wave.svg") 50%,\n      url("../../assets/img/Graphic-Teal-Wave.svg") 50%,\n      url("../../assets/img/Graphic-Hero-Blur.jpg") 100%'
      },
      ".section": { width: "100%", height: "400px", marginBottom: "5rem" },
      ".section img": { marginTop: "-1rem" },
      ".section .up": { marginTop: "1rem", transition: "all 0.5s linear-out" },
      ".content": { textAlign: "center" },
      ".heading h1": { fontSize: "7vw", fontWeight: 900 },
      ".left-content": { textAlign: "center", marginTop: "0rem" },
      ".hexagon": { marginTop: "0", marginLeft: "-25%" },
      ".hexagon2": { marginTop: "15.2rem", marginLeft: "-6.5rem" },
      ".hexagon3": { marginLeft: "-4.8rem", marginTop: "31rem" },
      ".hexa-bottom-row": { marginTop: "50rem" },
      ".right-content": { marginTop: "-30rem", textAlign: "center" },
      ".div-1": {
        backgroundColor: "lightblue",
        textAlign: "center",
        width: "250px",
        padding: "25px 15px 15px 15px",
        marginTop: "-7rem"
      },
      ".div-2": {
        backgroundColor: "lightblue",
        textAlign: "center",
        width: "250px",
        padding: "25px 15px 15px 15px",
        marginRight: "0rem",
        marginTop: "1rem",
        marginBottom: "10rem"
      },
      ".div-3": {
        backgroundColor: "lightblue",
        textAlign: "center",
        width: "250px",
        padding: "25px 15px 15px 15px",
        position: "absolute",
        marginTop: "13.7rem"
      },
      ".main-box-2": { cssFloat: "left" },
      ".box-inner": {
        transform: "rotate(0deg)",
        height: "21rem",
        marginTop: "2.5rem",
        width: "33vw",
        borderRadius: "var(--bu)",
        marginLeft: "0%"
      },
      ".box-inner-2": { right: "12px", borderRadius: "var(--bu)" },
      ".animated-content": { marginLeft: "0.5rem" },
      ".animated-content-2": { right: "4rem" },
      ".main-box": { height: "26rem" },
      ".box-inner img": { borderRadius: "15px" },
      ".main-box .text": { padding: "0px 0px 0px 0px", marginLeft: "-2rem" },
      ".title": { paddingLeft: "50px" },
      ".title::before": { right: "3%" },
      ".bordered:hover .main-box .text": {
        top: "25%",
        transition: "top 500ms 300ms ease-out"
      },
      ".bordered:hover .title": {
        bottom: "72%",
        transition: "bottom 500ms ease-in"
      },
      ".list-image": { marginRight: "2rem" }
    },
    ".column-1": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    },
    ".column-2": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      textAlign: "center"
    },
    ".column-3": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    ".column-2 .footer-links": {
      listStyleType: "none",
      display: "flex",
      justifyContent: "space-evenly"
    }
  }
  