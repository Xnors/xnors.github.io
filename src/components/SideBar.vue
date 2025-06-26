<!-- Some code here is from https://codepen.io/Twikito/pen/zGdqVO -->
<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const switchLanguage = () => {
  locale.value = locale.value === "en" ? "zh" : "en";
};
</script>

<template>
  <input type="checkbox" id="navcheck" role="button" title="menu" />
  <label for="navcheck" aria-hidden="true" title="menu">
    <span class="burger">
      <span class="bar">
        <span class="visuallyhidden"></span>
      </span>
    </span>
  </label>
  <nav id="menu">
    <a href="https://www.github.com/Xnors">GitHub</a>
    <!-- <a href="https://www.jihulab.com/Xnors">极狐GitLab</a> -->
    <a href="https://xnors.github.io/xblogs">{{ $t("nav.blog") }}</a>
    <a @click="switchLanguage()">{{ $t("nav.checkout") }}</a>
  </nav>
</template>

<style type="text/scss" lang="scss">
$timing-function: cubic-bezier(0.19, 1, 0.22, 1);
$nav-width-desktop: 40em;
$nav-width-mobile: 25em;
$nav-item-nb: 6;

* {
  font-family: "deyihei";
  letter-spacing: 1.2px;
}

input {
  position: fixed;
  opacity: 0;
}

label {
  position: absolute;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;

  &::before {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(darken(#000000, 100%), 0.75);
    content: "";
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s $timing-function;
  }

  .burger {
    position: fixed;
    top: 1em;
    left: 1em;
    z-index: 3;
    width: 2em;
    height: 2em;
    margin: 0;
    padding: 0;
    transition: opacity 0.5s $timing-function;

    &::before,
    .bar,
    &::after {
      position: absolute;
      left: 0;
      display: block;
      width: 100%;
      height: 12%;
      background: white;
      content: "";
      transition: all 0.5s $timing-function;
    }

    .bar {
      top: 44%;
    }

    &::before {
      top: 0;
      transform-origin: top left;
    }

    &::after {
      bottom: 0;
      transform-origin: bottom left;
    }
  }
}

input:focus + label,
label:hover {
  .burger {
    opacity: 0.75;
  }
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  transform: translate3d(0, 0, 0);
  transform: translateX(-100%);
  will-change: transform;
  transition: transform 0.5s $timing-function;

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: $nav-width-mobile;
    background-image: linear-gradient(to bottom right, #3d3d3da0, #050505a0);
    border: #333333 2px solid;
    -webkit-backdrop-filter: blur(2.8px);
    backdrop-filter: blur(2.8px);

    content: "";
    transform: skewX(15deg) translateX(-100%);
    transform-origin: bottom left;
    will-change: transform;
    transition: transform 0.5s $timing-function;

    @media (min-width: 40em) {
      width: $nav-width-desktop;
    }
  }

  a {
    margin: 0.5em 0;
    padding: 0.2em 2em;
    font-size: 1.5em;
    color: white;
    text-decoration: none;
    font-weight: 500;
    transform: translateX(-100%);
    transition: color 0.15s, transform 0.5s, scale 0.25s, margin-left 0.25s;
    transition-timing-function: $timing-function;
    position: relative;

    @for $i from 1 through $nav-item-nb {
      &:nth-child(#{$i}) {
        transition-delay: 0s, #{50 + (54 * $i)}ms;
      }
    }

    &:hover,
    &:focus {
      color: rgb(118, 106, 187);
      scale: 1.4;
      margin-left: 0;
    }
  }
}

main {
  overflow: hidden;

  .content {
    transform: translate3d(0, 0, 0);
    will-change: transform, filter;
    transition: all 0.5s $timing-function;
  }
}

[id="navcheck"]:checked {
  & + label {
    &::before {
      opacity: 1;
      pointer-events: auto;
    }

    .burger {
      &::before,
      &::after {
        width: 141.42%;
      }

      &::before {
        transform: rotate(45deg) translateY(-50%);
      }

      &::after {
        transform: rotate(-45deg) translateY(50%);
      }

      .bar {
        transform: scale(0.1);
      }
    }
  }

  & ~ nav {
    transform: translateX(0);

    &::before {
      transform: skewX(15deg) translateX(0);
    }

    a {
      transform: translateX(0);
    }
  }

  & ~ main .content {
    transform: translateX(3em);
    transform-origin: left center;
    filter: blur(2px);
  }
}

/* helper */
.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

/* misc */
body {
  overflow-x: hidden;
  background: #444;
  color: white;
  font: 1em/1.4 "lato";
}

h1 {
  font: 2.5em/1.4 "roboto condensed";
  font-weight: 700;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
