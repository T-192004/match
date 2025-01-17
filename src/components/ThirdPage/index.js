import {
  MainBackgroundContainer,
  MainHeadingLayout,
  MonkeyImageLayout,
  MainHeading,
  ButtonLayout,
} from '../StyledComponents'

const ThirdPage = () => (
  <MainBackgroundContainer>
    <ButtonLayout>Back</ButtonLayout>
    <MainHeadingLayout>
      <MainHeading>This SecondPage</MainHeading>
    </MainHeadingLayout>
    <MonkeyImageLayout>
      <svg
        width="646"
        className="monkey-img"
        height="630"
        viewBox="0 0 666 632"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M160.365 448.508L179.409 417.498C186.401 406.112 199.847 400.416 212.891 403.314L214.341 403.637L231.274 408.151C232.898 408.584 234.554 408.886 236.227 409.053L259.544 411.385H285.375H302.156C303.881 411.385 305.603 411.242 307.304 410.959L335.744 406.219L357.622 400.751C366.305 398.58 375.451 401.737 380.947 408.802L385.976 415.842C386.927 417.173 387.772 418.576 388.504 420.039L392.571 428.172L400.32 441.085L406.385 450.182C407.505 451.862 408.46 453.646 409.237 455.509L411.45 460.821C413.448 465.614 413.846 470.925 412.586 475.963C412.159 477.672 411.546 479.329 410.758 480.905L410.342 481.736C408.837 484.747 406.855 487.496 404.475 489.876L402.513 491.838C401.054 493.296 399.456 494.606 397.739 495.75L396.638 496.484C393.943 498.281 390.985 499.649 387.87 500.538L383.53 501.778L377.774 503.697C376.454 504.137 375.072 504.361 373.68 504.361C370.031 504.361 367.241 507.613 367.796 511.22L368.032 512.755C368.811 517.816 372.615 521.88 377.614 522.99L379.339 523.374C380.408 523.611 381.499 523.731 382.594 523.731H389.988H397.737H402.385C404.447 523.731 406.504 523.527 408.527 523.123L415.204 521.788C417.33 521.363 419.406 520.718 421.398 519.864L427.442 517.274L437.774 512.109L445.938 506.667C448.234 505.136 450.318 503.309 452.136 501.232L456.465 496.285C457.777 494.785 458.944 493.164 459.948 491.442L466.06 480.966C467.004 479.348 467.801 477.649 468.441 475.888L471.483 467.524C472.255 465.401 472.796 463.2 473.094 460.96L475.228 444.959L479.103 423.007L482.63 399.49C482.861 397.952 482.977 396.399 482.977 394.844V388.864C482.977 385.815 483.422 382.783 484.298 379.863L486.852 371.353L488.754 362.792C489.207 360.757 489.861 358.771 490.708 356.866L494.601 348.109L496.429 343.234C497.782 339.628 499.788 336.302 502.347 333.423L508.807 326.156L515.273 317.845C516.982 315.648 518.977 313.688 521.204 312.018L528.18 306.786L537.716 300.112C539.959 298.542 542.399 297.273 544.973 296.337L555.302 292.582L569.509 287.416L577.777 285.579C580.007 285.084 582.285 284.833 584.57 284.833H591.465H597.068C599.353 284.833 601.631 285.084 603.861 285.579L609.069 286.736C611.104 287.188 613.089 287.843 614.994 288.689L623.753 292.582L632.2 296.335C634.307 297.272 636.275 298.496 638.047 299.972L639.925 301.537C642.022 303.285 643.63 305.548 644.588 308.104L644.944 309.052C646.255 312.548 646.051 316.432 644.381 319.771C643.553 321.427 642.38 322.903 640.957 324.089C637.483 326.983 632.775 327.996 628.427 326.754L627.687 326.542C626.788 326.286 625.915 325.946 625.079 325.528L621.004 323.491C619.395 322.687 617.72 322.022 615.998 321.506L605.671 318.408L595.511 315.638C592.825 314.905 590.054 314.534 587.271 314.534H581.854C578.806 314.534 575.775 314.979 572.856 315.855L568.096 317.282C565.604 318.03 563.214 319.085 560.983 320.424L551.428 326.156L542.876 332.569C541.691 333.458 540.569 334.43 539.521 335.478L532.703 342.296C531.412 343.586 530.237 344.987 529.191 346.482L524.142 353.693C522.536 355.986 521.246 358.484 520.304 361.12L515.265 375.227L511.391 390.723L508.807 408.802L505.541 425.131C505.137 427.153 504.933 429.211 504.933 431.274V446.241C504.933 447.966 504.79 449.689 504.507 451.391L501.462 469.653C501.193 471.267 500.798 472.857 500.281 474.409L495.688 488.186C494.965 490.354 494.008 492.436 492.832 494.396L486.852 504.361L481.086 513.968C479.769 516.164 478.187 518.19 476.376 520.001L470.062 526.314L460.441 533.795C459.108 534.832 457.693 535.759 456.211 536.568L444.232 543.101L433.899 546.975L426.584 549.901C422.885 551.38 418.937 552.141 414.953 552.141H405.486H389.988H379.656H375.78C372.214 552.141 369.323 555.031 369.323 558.597V571.703C369.323 575.838 368.504 579.933 366.914 583.75L362.866 593.463L353.825 610.251L348.555 618.156C345.274 623.076 340.411 626.774 334.801 628.644C330.425 630.102 325.645 629.972 321.361 628.259C317.907 626.878 316.251 622.936 317.682 619.502L318.761 616.913C320.594 612.515 321.537 607.798 321.537 603.033V598.629V591.27C321.537 588.497 320.671 585.794 319.059 583.537C316.562 580.042 312.53 577.967 308.234 577.967H294.415H268.585H255.81C251.622 577.967 247.643 579.797 244.918 582.977C242.688 585.577 241.463 588.889 241.463 592.315V602.9C241.463 607.761 242.337 612.582 244.045 617.134L245.159 620.106C247.12 625.335 243.255 630.912 237.671 630.912C235.941 630.912 234.257 630.351 232.873 629.313L229.934 627.109C223.042 621.941 217.165 615.543 212.599 608.239L206.592 598.629L194.401 574.25C192.226 569.901 191.094 565.105 191.094 560.242V523.289C191.094 513.774 186.768 504.775 179.338 498.832L167.491 489.355C155.152 479.486 152.097 461.971 160.365 448.508Z"
          fill="#D2714C"
          stroke="#D2714C"
          strokeWidth="0.782983"
        />
        <circle cx="65.6531" cy="218.203" r="64.6531" fill="#D2714C" />
        <g filter="url(#filter0_f_0_246)">
          <circle cx="69.6944" cy="218.203" r="48.4898" fill="#FFE1C2" />
        </g>
        <g filter="url(#filter1_f_0_246)">
          <ellipse
            cx="58"
            cy="242.5"
            rx="28"
            ry="24.5"
            fill="#D2714C"
            fillOpacity="0.51"
          />
        </g>
        <circle
          cx="64.6531"
          cy="64.6531"
          r="64.6531"
          transform="matrix(-1 0 0 1 546.51 153.55)"
          fill="#D2714C"
        />
        <g filter="url(#filter2_f_0_246)">
          <circle
            cx="48.4898"
            cy="48.4898"
            r="48.4898"
            transform="matrix(-1 0 0 1 526.306 169.714)"
            fill="#FFE1C2"
          />
        </g>
        <g filter="url(#filter3_f_0_246)">
          <ellipse
            cx="27.5"
            cy="24.5"
            rx="27.5"
            ry="24.5"
            transform="matrix(-1 0 0 1 517 218)"
            fill="#D2714C"
            fillOpacity="0.51"
          />
        </g>
        <g filter="url(#filter4_f_0_246)">
          <path
            d="M618 312.5C618 319.404 623.82 325 631 325C638.18 325 644 319.404 644 312.5C644 305.596 638.18 300 631 300C623.82 300 618 305.596 618 312.5Z"
            fill="white"
            fillOpacity="0.9"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M303.104 1.22395C313.589 5.04036 318.996 16.6343 315.179 27.1198L299.977 68.8882C296.707 77.8709 287.73 83.1261 278.631 82.0484C277.138 83.1344 275.469 84.0323 273.647 84.6954C263.162 88.5118 251.568 83.1054 247.752 72.6199L232.549 30.8516C228.733 20.3661 234.139 8.77214 244.625 4.95574C255.11 1.13934 266.704 6.54569 270.52 17.0312L273.185 24.3521L277.208 13.2994C281.024 2.81391 292.618 -2.59245 303.104 1.22395Z"
          fill="#D2714C"
        />
        <path
          d="M481.857 239.021C481.857 334.644 388.687 412.162 273.755 412.162C158.823 412.162 65.6528 334.644 65.6528 239.021C65.6528 143.397 158.823 36.3662 273.755 36.3662C388.687 36.3662 481.857 143.397 481.857 239.021Z"
          fill="#D2714C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M99.4648 333.661C101.367 295.62 132.681 262.653 174.198 262.653H373.66C415.021 262.653 446.263 295.376 448.371 333.246C411.265 380.747 346.92 412.162 273.755 412.162C200.804 412.162 136.62 380.93 99.4648 333.661Z"
          fill="#FFE1C2"
        />
        <g filter="url(#filter5_f_0_246)">
          <path
            d="M440 178.063C440 232.613 360.084 186.102 272.59 186.102C185.096 186.102 99 233.56 99 178.063C99 122.566 180.023 59.408 266.972 49.4411C327.082 42.5507 440 117.772 440 178.063Z"
            fill="url(#paint0_linear_0_246)"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M354.47 324.957C402.507 324.957 441.449 280.676 441.449 226.052C441.449 171.429 402.507 127.147 354.47 127.147C319.701 127.147 289.697 150.346 275.775 183.873C261.853 150.346 231.849 127.148 197.08 127.148C149.043 127.148 110.102 171.429 110.102 226.053C110.102 280.676 149.043 324.958 197.08 324.958C231.849 324.958 261.853 301.759 275.775 268.232C289.697 301.759 319.701 324.957 354.47 324.957Z"
          fill="#FFE1C2"
        />
        <ellipse
          cx="32.3265"
          cy="40.4082"
          rx="32.3265"
          ry="40.4082"
          transform="matrix(-1 0 0 1 223.244 206.081)"
          fill="#562B30"
        />
        <ellipse
          cx="12.1225"
          cy="14.1429"
          rx="12.1225"
          ry="14.1429"
          transform="matrix(-1 0 0 1 211.122 218.204)"
          fill="white"
        />
        <circle
          cx="6.06123"
          cy="6.06123"
          r="6.06123"
          transform="matrix(-1 0 0 1 186.876 246.49)"
          fill="white"
        />
        <ellipse
          cx="364.674"
          cy="246.489"
          rx="32.3265"
          ry="40.4082"
          fill="#562B30"
        />
        <ellipse
          cx="356.592"
          cy="232.345"
          rx="12.1225"
          ry="14.1429"
          fill="white"
        />
        <circle cx="374.776" cy="252.55" r="6.06123" fill="white" />
        <path
          d="M306.828 287.491C306.828 295.037 294.943 299.905 280.282 299.905C265.621 299.905 253.736 295.037 253.736 287.491C253.736 279.945 265.621 270.737 280.282 270.737C294.943 270.737 306.828 279.945 306.828 287.491Z"
          fill="#562B30"
        />
        <circle cx="292.46" cy="281.165" r="3.74765" fill="white" />
        <path
          d="M280.162 278.43V306.057C280.162 315.079 287.476 322.393 296.498 322.393H298.78C306.541 322.393 312.833 316.101 312.833 308.339V308.339"
          stroke="#562B30"
          strokeWidth="6.87069"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M280.162 278.427V306.054C280.162 315.076 272.848 322.39 263.826 322.39H261.543C253.782 322.39 247.49 316.098 247.49 308.337V308.337"
          stroke="#562B30"
          strokeWidth="6.87069"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g filter="url(#filter6_f_0_246)">
          <ellipse
            cx="387.306"
            cy="315.224"
            rx="30.3061"
            ry="22.2245"
            fill="#FFB99B"
          />
        </g>
        <g filter="url(#filter7_f_0_246)">
          <ellipse
            cx="176.306"
            cy="315.224"
            rx="30.3061"
            ry="22.2245"
            fill="#FFB99B"
          />
        </g>
        <g filter="url(#filter8_f_0_246)">
          <ellipse
            cx="177.766"
            cy="477.601"
            rx="22.0466"
            ry="11.4256"
            transform="rotate(41.3313 177.766 477.601)"
            fill="#A14724"
            fillOpacity="0.63"
          />
        </g>
        <g filter="url(#filter9_f_0_246)">
          <ellipse
            cx="389.535"
            cy="481.642"
            rx="22.0466"
            ry="11.4256"
            transform="rotate(-36.1588 389.535 481.642)"
            fill="#A14724"
            fillOpacity="0.63"
          />
        </g>
        <g filter="url(#filter10_f_0_246)">
          <ellipse
            cx="280.471"
            cy="494.877"
            rx="44.9934"
            ry="57.2758"
            transform="rotate(1.97407 280.471 494.877)"
            fill="#FFE1C2"
            fillOpacity="0.9"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_246"
            x="11.0046"
            y="159.514"
            width="117.379"
            height="117.379"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="5.1"
              result="effect1_foregroundBlur_0_246"
            />
          </filter>
          <filter
            id="filter1_f_0_246"
            x="0.1"
            y="188.1"
            width="115.8"
            height="108.8"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="14.95"
              result="effect1_foregroundBlur_0_246"
            />
          </filter>
          <filter
            id="filter2_f_0_246"
            x="419.126"
            y="159.514"
            width="117.379"
            height="117.379"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="5.1"
              result="effect1_foregroundBlur_0_246"
            />
          </filter>
          <filter
            id="filter3_f_0_246"
            x="433"
            y="189"
            width="113"
            height="107"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="14.5"
              result="effect1_foregroundBlur_0_246"
            />
          </filter>
          <filter
            id="filter4_f_0_246"
            x="596.7"
            y="278.7"
            width="68.6"
            height="67.6"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="10.65"
              result="effect1_foregroundBlur_0_246"
            />
          </filter>
          <filter
            id="filter5_f_0_246"
            x="63"
            y="13"
            width="413"
            height="228"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="18"
              result="effect1_foregroundBlur_0_246"
            />
          </filter>
          <filter
            id="filter6_f_0_246"
            x="340.1"
            y="276.1"
            width="94.4123"
            height="78.249"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="8.45"
              result="effect1_foregroundBlur_0_246"
            />
          </filter>
          <filter
            id="filter7_f_0_246"
            x="129.1"
            y="276.1"
            width="94.4123"
            height="78.249"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="8.45"
              result="effect1_foregroundBlur_0_246"
            />
          </filter>
          <filter
            id="filter8_f_0_246"
            x="150.942"
            y="452.073"
            width="53.6466"
            height="51.0556"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="4.31276"
              result="effect1_foregroundBlur_0_246"
            />
          </filter>
          <filter
            id="filter9_f_0_246"
            x="361.871"
            y="457.068"
            width="55.3292"
            height="49.1477"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="4.31276"
              result="effect1_foregroundBlur_0_246"
            />
          </filter>
          <filter
            id="filter10_f_0_246"
            x="204.291"
            y="406.445"
            width="152.36"
            height="176.865"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="15.5846"
              result="effect1_foregroundBlur_0_246"
            />
          </filter>
          <linearGradient
            id="paint0_linear_0_246"
            x1="269.5"
            y1="49"
            x2="269.5"
            y2="205"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8F3B1B" />
            <stop offset="0.280912" stopColor="#A24A29" stopOpacity="0.94" />
            <stop offset="1" stopColor="#D2714C" stopOpacity="0.78" />
          </linearGradient>
        </defs>
      </svg>
    </MonkeyImageLayout>
    <ButtonLayout>NEXT</ButtonLayout>
  </MainBackgroundContainer>
)

export default ThirdPage
