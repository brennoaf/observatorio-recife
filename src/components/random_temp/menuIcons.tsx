import { title } from "process";

export const menuItems = [
    {
      title: "MENU",
      items: [
        {
          label: "Voltar",
          icon: (
            <svg height="800px" width="800px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
              <g>
                <path d="M355.022,115.897c22.422,0,40.603-18.19,40.603-40.616c0-22.427-18.181-40.608-40.603-40.608   c-22.434,0-40.616,18.182-40.616,40.608C314.406,97.707,332.588,115.897,355.022,115.897z"/>
                <path d="M509.402,232.445l-26.925-40.501c-6.543-9.57-15.22-17.486-25.33-23.155l-52.81-29.574   c-9.676-4.524-16.996-7.402-26.189-6.159l-25.268,3.436c-9.422,1.275-18.01,6.077-24.037,13.429l-48.096,51.183l-44.055,16.244   c-8.346,3.075-12.825,12.137-10.186,20.627l0.204,0.654c2.593,8.358,11.196,13.29,19.715,11.327l35.901-8.284   c8.952-2.07,17.458-5.758,25.072-10.894l24.97-16.783l8.816,67.033c0.647,4.916-0.343,9.913-2.822,14.214l-74.758,129.848   c-5.333,9.242-2.176,21.068,7.05,26.45l0.642,0.376c8.735,5.087,19.908,2.633,25.69-5.643l83.558-119.534l25.322,50.537   c1.873,3.738,4.351,7.132,7.336,10.044l56.164,54.92c7.091,6.928,18.305,7.23,25.747,0.712l0.9-0.786   c3.819-3.345,6.134-8.073,6.436-13.135c0.302-5.055-1.431-10.036-4.826-13.806l-47.421-52.818L424.44,269.16l-0.09,0.082   l-7.394-72.947l26.115,11.753l41.752,43.945c5.251,5.537,13.757,6.429,20.038,2.094l0.426-0.295   C512.256,248.999,514.096,239.495,509.402,232.445z"/>
                <polygon points="129.123,101.06 43.287,42.435 262.74,42.435 262.74,8.934 0,8.934 0,444.44 43.287,444.44    129.123,503.066 129.123,486.315 129.123,444.44 233.8,444.44 233.8,410.94 129.123,410.94  "/>
              </g>
            </svg>
          ),
          href: "/",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          label: "Panorama Recife",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.18753 11.3788C4.03002 11.759 4 11.9533 4 12V20.0018C4 20.5529 4.44652 21 5 21H8V15C8 13.8954 8.89543 13 10 13H14C15.1046 13 16 13.8954 16 15V21H19C19.5535 21 20 20.5529 20 20.0018V12C20 11.9533 19.97 11.759 19.8125 11.3788C19.6662 11.0256 19.4443 10.5926 19.1547 10.1025C18.5764 9.1238 17.765 7.97999 16.8568 6.89018C15.9465 5.79788 14.9639 4.78969 14.0502 4.06454C13.5935 3.70204 13.1736 3.42608 12.8055 3.2444C12.429 3.05862 12.1641 3 12 3C11.8359 3 11.571 3.05862 11.1945 3.2444C10.8264 3.42608 10.4065 3.70204 9.94978 4.06454C9.03609 4.78969 8.05348 5.79788 7.14322 6.89018C6.23505 7.97999 5.42361 9.1238 4.8453 10.1025C4.55568 10.5926 4.33385 11.0256 4.18753 11.3788ZM10.3094 1.45091C10.8353 1.19138 11.4141 1 12 1C12.5859 1 13.1647 1.19138 13.6906 1.45091C14.2248 1.71454 14.7659 2.07921 15.2935 2.49796C16.3486 3.33531 17.4285 4.45212 18.3932 5.60982C19.3601 6.77001 20.2361 8.0012 20.8766 9.08502C21.1963 9.62614 21.4667 10.1462 21.6602 10.6134C21.8425 11.0535 22 11.5467 22 12V20.0018C22 21.6599 20.6557 23 19 23H16C14.8954 23 14 22.1046 14 21V15H10V21C10 22.1046 9.10457 23 8 23H5C3.34434 23 2 21.6599 2 20.0018V12C2 11.5467 2.15748 11.0535 2.33982 10.6134C2.53334 10.1462 2.80369 9.62614 3.12345 9.08502C3.76389 8.0012 4.63995 6.77001 5.60678 5.60982C6.57152 4.45212 7.65141 3.33531 8.70647 2.49796C9.2341 2.07921 9.77521 1.71454 10.3094 1.45091Z" />
            </svg>
          ),
          href: "/observatorio/panorama",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          label: "Empregos",
          icon: (
            <svg viewBox="-1 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <rect width="16" height="16" id="icon-bound" fill="none"/>
              <path d="M6,2h4v1h2V2c0-1.1-0.9-2-2-2H6C4.9,0,4,0.9,4,2v1h2V2z M0,14c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V8H0V14z M7,9h2v1 c0,0.553-0.447,1-1,1s-1-0.447-1-1V9z M15,4H1C0.45,4,0,4.45,0,5v2h16V5C16,4.45,15.55,4,15,4z"/>
            </svg>
          ),
          href: "/observatorio/empregos",
          visible: ["admin", "teacher"],
        },
        {
          label: "Empresas",
          icon: (
            <svg viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.0837 27.75C40.0837 26.9323 39.7588 26.148 39.1806 25.5698C38.6023 24.9915 37.8181 24.6667 37.0003 24.6667H9.25033C8.43257 24.6667 7.64832 24.9915 7.07008 25.5698C6.49184 26.148 6.16699 26.9323 6.16699 27.75V67.8333H40.0837V27.75ZM18.5003 61.6667H12.3337V55.5H18.5003V61.6667ZM18.5003 49.3333H12.3337V43.1667H18.5003V49.3333ZM18.5003 37H12.3337V30.8333H18.5003V37ZM33.917 61.6667H24.667V55.5H33.917V61.6667ZM33.917 49.3333H24.667V43.1667H33.917V49.3333ZM33.917 37H24.667V30.8333H33.917V37ZM44.7087 18.5H18.5003V9.25001C18.5003 8.43225 18.8252 7.648 19.4034 7.06976C19.9817 6.49152 20.7659 6.16667 21.5837 6.16667H52.417C53.2347 6.16667 54.019 6.49152 54.5972 7.06976C55.1755 7.648 55.5003 8.43225 55.5003 9.25001V30.8333H46.2503V20.0417C46.2503 19.6328 46.0879 19.2407 45.7988 18.9515C45.5097 18.6624 45.1175 18.5 44.7087 18.5ZM67.8337 40.0833V67.8333H60.1253V55.5H53.9587V67.8333H46.2503V40.0833C46.2503 39.2656 46.5752 38.4813 47.1534 37.9031C47.7317 37.3249 48.5159 37 49.3337 37H64.7503C65.5681 37 66.3523 37.3249 66.9306 37.9031C67.5088 38.4813 67.8337 39.2656 67.8337 40.0833Z"/>
            </svg>

          ),
          href: "/observatorio/empresas",
          visible: ["admin", "teacher"],
        },
        {
          label: "PIB",
          icon: (
            <svg viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path style={{ fill: 'none !important' }} d="M9.25 64.75H64.75M9.25 55.5H64.75M17.9553 9.25114C19.2348 10.3811 20.0417 12.0338 20.0417 13.875C20.0417 17.2808 17.2808 20.0417 13.875 20.0417C12.0338 20.0417 10.3811 19.2348 9.25114 17.9553M17.9553 9.25114C18.3194 9.25 18.7058 9.25 19.1167 9.25H54.8833C55.294 9.25 55.6807 9.25 56.0448 9.25114M17.9553 9.25114C15.2579 9.2595 13.7793 9.32995 12.6171 9.92214C11.4567 10.5133 10.5133 11.4567 9.92214 12.6171C9.32995 13.7793 9.2595 15.2579 9.25114 17.9553M9.25114 17.9553C9.25 18.3194 9.25 18.7058 9.25 19.1167V36.3833C9.25 36.794 9.25 37.1807 9.25114 37.5448M56.0448 9.25114C54.7652 10.3811 53.9583 12.0338 53.9583 13.875C53.9583 17.2808 56.7191 20.0417 60.125 20.0417C61.9661 20.0417 63.619 19.2348 64.7488 17.9553M56.0448 9.25114C58.7421 9.2595 60.2209 9.32995 61.383 9.92214C62.5433 10.5133 63.4868 11.4567 64.0778 12.6171C64.6701 13.7793 64.7404 15.2579 64.7488 17.9553M9.25114 37.5448C10.3811 36.2652 12.0338 35.4583 13.875 35.4583C17.2808 35.4583 20.0417 38.2192 20.0417 41.625C20.0417 43.4661 19.2348 45.119 17.9553 46.2488M9.25114 37.5448C9.2595 40.2421 9.32995 41.7206 9.92214 42.883C10.5133 44.0433 11.4567 44.9868 12.6171 45.5778C13.7793 46.1701 15.2579 46.2404 17.9553 46.2488M17.9553 46.2488C18.3194 46.25 18.7058 46.25 19.1167 46.25H54.8833C55.294 46.25 55.6807 46.25 56.0448 46.2488M56.0448 46.2488C54.7652 45.119 53.9583 43.4661 53.9583 41.625C53.9583 38.2192 56.7191 35.4583 60.125 35.4583C61.9667 35.4583 63.62 36.2659 64.75 37.5461M56.0448 46.2488C58.7421 46.2404 60.2209 46.1701 61.383 45.5778C62.5433 44.9868 63.4868 44.0433 64.0778 42.883C64.6698 41.7209 64.7417 40.2424 64.75 37.5461M64.75 37.5461C64.7512 37.1816 64.75 36.7946 64.75 36.3833V19.1167C64.75 18.7058 64.75 18.3194 64.7488 17.9553M43.1667 27.75C43.1667 31.1558 40.4058 33.9167 37 33.9167C33.5941 33.9167 30.8333 31.1558 30.8333 27.75C30.8333 24.3442 33.5941 21.5833 37 21.5833C40.4058 21.5833 43.1667 24.3442 43.1667 27.75Z" 
              stroke="gray"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round" fill="none !important"/>
            </svg>
          ),
          href: "/observatorio/pib",
          visible: ["admin", "teacher"],
        },
        {
          label: "IPCA",
          icon: (
            <svg viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.9097 17.6048C13.9097 13.4599 17.2258 10.1172 21.3973 10.1172C25.5422 10.1172 28.8849 13.4599 28.8849 17.6048C28.8583 21.7765 25.5156 25.0924 21.3973 25.0924C17.2524 25.0924 13.9097 21.7496 13.9097 17.6048ZM55.211 49.7188H41.625V37.5781C41.625 31.6636 36.4563 26.8828 30.6406 26.8828H12.4297C6.0449 26.8828 0.575259 32.4155 0.578149 37.8672V60.125C0.570634 62.5916 2.31281 63.8796 4.0469 63.8828C5.78532 63.886 7.51565 62.5979 7.51565 60.125V38.4453H9.82815V63.8828H32.375V38.4453H34.6875L34.7109 53.0054C34.6956 55.5286 36.2551 56.6031 37.8672 56.6562H55.211C59.9409 56.6562 59.9409 49.7188 55.211 49.7188ZM70.8331 44.228V22.9874H66.5584V44.2283H65.1255V27.6835H60.8509V44.2283H59.4058V35.7631H55.1312V44.228H53.6983V39.9172H49.4236V44.228H47.0033V21.1811H45.3828V45.8812H73.4219V44.2607V44.228H70.8331Z"/>
            </svg>
          ),
          href: "/observatorio/ipca",
          visible: ["admin", "teacher"],
        },
        {
          label: "Ranking de Competitividade dos Municípios",
          icon: (
            <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_375_116)">
                <path d="M11.7186 35.4909H3.51424C1.66585 35.4909 0.166992 36.9913 0.166992 38.8382V70.6496C0.166992 72.498 1.66585 73.9984 3.51424 73.9984H11.7186C13.567 73.9984 15.0659 72.498 15.0659 70.6496V38.8397C15.0674 36.9913 13.5702 35.4909 11.7186 35.4909Z"  />
                <path d="M31.3075 45.5374H23.1031C21.2547 45.5374 19.7559 47.0362 19.7559 48.8862V70.6512C19.7559 72.4996 21.2547 74 23.1031 74H31.3075C33.1559 74 34.6547 72.4996 34.6547 70.6512V48.8862C34.6579 47.0362 33.159 45.5374 31.3075 45.5374Z"  />
                <path d="M50.897 45.5374H42.6926C40.8426 45.5374 39.3438 47.0362 39.3438 48.8862V70.6512C39.3438 72.4996 40.8426 74 42.6926 74H50.897C52.7453 74 54.2426 72.4996 54.2426 70.6512V48.8862C54.2458 47.0362 52.7453 45.5374 50.897 45.5374Z"  />
                <path d="M70.4862 35.4909H62.2818C60.4334 35.4909 58.9346 36.9913 58.9346 38.8382V70.6496C58.9346 72.498 60.4334 73.9984 62.2818 73.9984H70.4862C72.3346 73.9984 73.8334 72.498 73.8334 70.6496V38.8397C73.835 36.9913 72.333 35.4909 70.4862 35.4909Z"  />
                <path d="M45.8021 6.72913C45.6824 6.60318 45.5344 6.51344 45.3785 6.46306L35.7824 3.45589C31.9486 2.24672 29.4516 4.34859 28.7824 5.02717C28.3888 5.42078 28.0913 5.82856 27.9322 6.1954L23.6608 16.2466C23.4168 16.8118 23.5002 17.5849 23.8828 18.3548C24.437 19.4411 25.4242 20.2283 26.605 20.5149C27.9291 20.8266 29.3036 20.3905 30.3789 19.3167C30.6639 19.0444 30.8985 18.7279 31.0402 18.4697L32.4792 15.8089C32.7106 15.3681 33.0539 14.902 33.4176 14.5446C34.6503 13.3134 35.2345 13.8692 35.4832 14.1117C37.6339 16.1946 48.899 27.5022 48.899 27.5022C49.3036 27.9006 49.2139 28.6673 48.7179 29.1648C48.2157 29.6592 47.4536 29.7505 47.0553 29.3538L43.8907 26.1813C43.4782 25.7766 42.8264 25.7766 42.4139 26.1813C42.003 26.5969 42.003 27.2503 42.4139 27.6565L45.5785 30.829C45.9784 31.2242 45.895 31.9909 45.3943 32.4885C44.8952 32.986 44.1332 33.0741 43.7364 32.6632L40.5702 29.5049C40.1593 29.1003 39.498 29.1003 39.095 29.5049C38.684 29.9064 38.684 30.5755 39.095 30.9801L42.2596 34.1526C42.6579 34.5494 42.5698 35.302 42.0738 35.8011C41.5779 36.3096 40.8174 36.3868 40.4112 35.9884L37.2466 32.8285C36.8435 32.4129 36.1823 32.4129 35.7713 32.8285C35.3699 33.2332 35.3699 33.8881 35.7713 34.3038L38.9375 37.4621C39.3422 37.8604 39.2524 38.6272 38.758 39.1247C38.2542 39.6238 37.4922 39.712 37.0939 39.3136L33.2397 35.4515C33.7876 34.6234 33.638 33.4284 32.824 32.6034C31.9108 31.6981 30.5001 31.6115 29.6862 32.4176C30.5001 31.6115 30.4198 30.2008 29.5067 29.2955C28.5856 28.3745 27.1828 28.2879 26.3704 29.1066C27.1828 28.2879 27.1025 26.8929 26.1815 25.9734C25.2683 25.0524 23.8655 24.9642 23.0452 25.7845C23.8655 24.9642 23.7773 23.5709 22.8641 22.6482C22.0076 21.798 20.7308 21.6752 19.8995 22.3349L13.6568 16.0844C13.2522 15.6798 12.5909 15.6798 12.18 16.0844C11.7785 16.5001 11.7785 17.155 12.18 17.5597L18.4053 23.785L16.5632 25.6349C15.7508 26.4552 15.8296 27.8486 16.7475 28.7712C17.6653 29.6891 19.0666 29.7631 19.8806 28.957C19.0666 29.7631 19.1485 31.1738 20.0695 32.0933C20.9811 33.0001 22.3855 33.0883 23.2042 32.2665C22.3855 33.0867 22.4721 34.4959 23.3853 35.4027C24.3063 36.3269 25.7091 36.4119 26.5215 35.5901C25.7091 36.4104 25.7879 37.8053 26.7105 38.7264C27.6236 39.6474 29.0249 39.7183 29.8389 38.9122L31.7927 36.9614L35.6186 40.7905C36.8404 42.0091 38.9045 41.924 40.227 40.6015C40.8694 39.9607 41.2157 39.131 41.263 38.3265C42.077 38.2792 42.902 37.9344 43.5443 37.2826C44.1946 36.6371 44.5378 35.8231 44.5866 35.0044C45.4022 34.9572 46.2193 34.6124 46.868 33.97C47.5119 33.3261 47.8551 32.5011 47.9039 31.6823C48.7163 31.6351 49.5445 31.2887 50.1853 30.6448C51.5078 29.3223 51.5881 27.2582 50.3695 26.0348L48.7604 24.4195L55.3841 17.7958C55.7919 17.3944 55.7919 16.7268 55.3841 16.3206L45.8021 6.72913Z"  />
                <path d="M61.502 9.05615L53.0615 0.614035C52.2459 -0.206245 50.9266 -0.206245 50.1063 0.614035L47.1574 3.56295C46.3434 4.38166 46.3434 5.70418 47.1574 6.51029L55.6042 14.954C56.4198 15.7743 57.7407 15.7743 58.5563 14.954L61.5036 12.0035C62.3176 11.1974 62.3176 9.87328 61.502 9.05615ZM57.0716 13.3591C56.1269 13.3591 55.3649 12.5892 55.3649 11.6461C55.3649 10.703 56.1285 9.93469 57.0716 9.93469C58.0194 9.93469 58.7846 10.7046 58.7846 11.6477C58.7846 12.5908 58.0194 13.3591 57.0716 13.3591Z"  />
              </g>
              <defs>
                <clipPath id="clip0_375_116">
                  <rect width="74" height="74" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          ),
          href: "/observatorio/ranking-comp",
          visible: ["admin"],
        },

        //PORTOS
        {
          label: "Portos",
          icon: (
            <svg viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_375_88)">
                <path d="M21.4272 17.6208H23.5951V15.6455H23.6072C23.6072 14.9168 23.9023 14.2544 24.378 13.7786L24.372 13.7726C24.8417 13.3029 25.4981 13.0078 26.2328 13.0078H26.2389V12.9958H30.2978V6.60628H30.3098C30.3098 5.63672 30.7073 4.75749 31.3396 4.12516C31.9719 3.49284 32.8451 3.10742 33.8087 3.1014V3.08936H39.9513V3.1014C40.9208 3.1014 41.8001 3.49886 42.4324 4.13118C43.0587 4.76351 43.4501 5.63672 43.4561 6.60026H43.4622V13.0018H47.5211V13.0138C48.2498 13.0138 48.9122 13.3089 49.388 13.7907C49.8577 14.2604 50.1528 14.9168 50.1528 15.6395V15.6455H50.1588V17.6208H52.3268C53.1157 17.6208 53.8263 17.9399 54.3442 18.4518L54.3502 18.4458C54.8621 18.9577 55.1752 19.6683 55.1812 20.4632H55.1933V31.833H55.1812C55.1812 32.11 55.1391 32.381 55.0668 32.64L63.269 36.6266L54.9042 45.1479V53.6512C56.1869 53.0068 57.1987 52.0493 58.1502 51.146C60.0712 49.3273 61.8237 47.6652 64.8528 47.6291C68.2613 47.5929 69.3634 49.3514 71.712 51.158C72.0914 51.4531 72.4828 51.7542 73.0068 52.1336L73.067 52.1758C74.0727 52.9045 74.3015 54.3136 73.5668 55.3193C72.8382 56.3311 71.429 56.5539 70.4172 55.8252L70.357 55.783C69.9656 55.5 69.4597 55.1086 68.9599 54.7231C67.2376 53.3923 66.7437 52.1095 64.8829 52.1276C63.6423 52.1396 62.4981 53.2236 61.2516 54.41C58.8969 56.6442 56.2773 59.1253 51.1283 58.8905C46.7743 59.0892 44.233 57.3428 42.1253 55.4458H31.1891C28.985 57.1019 26.5881 58.6074 23.1013 58.5653C19.1147 58.6134 16.5492 56.6382 14.0681 54.7231C12.3458 53.3923 10.6777 52.1095 8.81682 52.1276C7.57626 52.1396 6.43206 53.2236 5.18547 54.41C4.72177 54.8496 4.24602 55.3013 3.71607 55.7529C2.7706 56.5659 1.34937 56.4515 0.542408 55.506C-0.264558 54.5606 -0.156159 53.1393 0.789316 52.3324C1.22291 51.959 1.6565 51.5495 2.08407 51.146C4.00514 49.3273 5.75758 47.6652 8.78671 47.6291C12.1952 47.5929 14.4716 49.3514 16.8202 51.158C17.8801 51.9771 18.9581 52.8021 20.1324 53.3682V44.8709L13.0082 36.4881L18.9701 33.2843C18.7232 32.8628 18.5787 32.369 18.5787 31.8451H18.5727V20.4692H18.5787C18.5787 19.6743 18.8979 18.9577 19.4098 18.4458C19.5001 18.3555 19.5964 18.2772 19.6928 18.2049C20.1685 17.8436 20.7708 17.6268 21.4272 17.6208ZM23.1013 66.0749H23.1254C25.5644 66.111 27.5035 64.6175 29.3824 63.1662C31.731 61.3535 34.0074 59.5951 37.4159 59.6372C40.4451 59.6673 42.1975 61.3294 44.1186 63.1541C45.8228 64.7741 47.7198 66.5687 51.0199 66.4001C51.0621 66.4001 51.0982 66.4001 51.1404 66.4001C51.1825 66.4001 51.2187 66.4001 51.2608 66.4001C54.5549 66.5747 56.4519 64.7741 58.1622 63.1541C60.0833 61.3354 61.8357 59.6733 64.8648 59.6372C68.2734 59.6011 69.3754 61.3535 71.724 63.1662C72.1034 63.4613 72.4949 63.7624 73.0188 64.1418L73.073 64.1839C74.0787 64.9066 74.3075 66.3158 73.5849 67.3215C72.8562 68.3272 71.4531 68.556 70.4474 67.8333L70.3871 67.7912L70.3811 67.7852L70.3751 67.7912C69.9837 67.5081 69.4778 67.1167 68.978 66.7313C67.2556 65.4004 66.7618 64.1177 64.901 64.1357C63.6604 64.1478 62.5162 65.2318 61.2696 66.4181C58.915 68.6524 56.2953 71.1335 51.1464 70.8986C46.0035 71.1335 43.3839 68.6524 41.0232 66.4181C39.7706 65.2318 38.6324 64.1538 37.3919 64.1357C35.537 64.1177 33.8629 65.4064 32.1406 66.7313C29.6594 68.6463 27.094 70.6216 23.1073 70.5734C19.1207 70.6216 16.5553 68.6463 14.0741 66.7313C12.3518 65.4004 10.6837 64.1177 8.82284 64.1357C7.58228 64.1478 6.43808 65.2318 5.1915 66.4181C4.72779 66.8577 4.25204 67.3094 3.7221 67.7611C2.77662 68.568 1.3554 68.4596 0.54843 67.5142C-0.258536 66.5687 -0.150137 65.1475 0.795338 64.3405C1.22893 63.9671 1.66253 63.5576 2.0901 63.1541C4.01116 61.3354 5.7636 59.6733 8.79273 59.6372C12.2013 59.6011 14.4776 61.3535 16.8263 63.1662C18.7052 64.6115 20.6443 66.111 23.0833 66.0749H23.1013ZM24.7394 30.1829L36.7354 23.7332L50.0143 30.1829H50.6887V22.1193H48.1173C48.051 22.1253 47.9848 22.1253 47.9125 22.1253C46.6659 22.1253 45.6542 21.1136 45.6542 19.867V17.5184H41.2099C39.9633 17.5184 38.9516 16.5067 38.9516 15.2601V7.60596H34.8084V15.2661C34.8084 16.5127 33.7966 17.5244 32.5501 17.5244H28.1057V19.873H28.0997C28.0997 21.1136 27.094 22.1193 25.8534 22.1193H23.0833V30.1829H24.7394Z"/>
              </g>
              <defs>
                <clipPath id="clip0_375_88">
                  <rect width="74" height="74" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          ),
          href: "/observatorio/portos",
          visible: ["admin", "teacher"],
        },

        //AEROPORTOS
        {
          label: "Aeroportos",
          icon: (
            <svg viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_375_76)">
                    <path d="M61.2704 13.7669C57.0527 14.9572 48.4455 18.7354 40.3823 22.2018L23.7334 7.83781C23.4221 7.56945 22.9973 7.47461 22.6016 7.58531L15.9771 9.43803C15.6136 9.53966 15.317 9.80319 15.1734 10.1522C15.0295 10.5014 15.0545 10.897 15.2412 11.2254L25.2425 28.8235C19.427 31.4023 14.1668 33.7689 10.4673 35.4421L5.95647 29.6282C5.8139 29.4446 5.57408 29.3653 5.35012 29.4278L0.418396 30.8076C0.255898 30.8529 0.121792 30.9676 0.0517183 31.1211C-0.0183552 31.2745 -0.017147 31.4511 0.0548897 31.6036L8.63708 49.7519C8.75638 50.0039 9.04015 50.1335 9.30882 50.0584C9.30882 50.0584 52.0906 38.0923 66.351 34.1037C71.9095 32.5491 75.1665 26.7625 73.6119 21.2042C72.0811 15.7298 66.4258 12.3119 61.2704 13.7669Z"/>
                    <path d="M55.9685 66.4602H18.0313C16.6765 66.4602 15.5781 65.3619 15.5781 64.007C15.5781 62.6522 16.6765 61.5538 18.0313 61.5538H55.9685C57.3235 61.5538 58.4217 62.6522 58.4217 64.007C58.4217 65.3619 57.3235 66.4602 55.9685 66.4602Z"/>
                </g>
                <defs>
                    <clipPath id="clip0_375_76">
                        <rect width="74" height="74" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
          ),
          href: "/observatorio/aeroportos",
          visible: ["admin", "teacher", "student", "parent"],
        },

        //BALANÇA COMERCIAL
        {
          label: "Balança Comercial",
          icon: (
            <svg viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.6 46.25H29.5977C29.5977 44.3792 29.7526 45.2406 19.7638 25.2629C17.723 21.1825 11.8793 21.1744 9.83506 25.2629C-0.238188 45.4117 0.0023125 44.4381 0.0023125 46.25H0C0 51.3583 6.62647 55.5 14.8 55.5C22.9735 55.5 29.6 51.3583 29.6 46.25ZM14.8 27.75L23.125 44.4H6.475L14.8 27.75ZM73.9977 46.25C73.9977 44.3792 74.1526 45.2406 64.1638 25.2629C62.123 21.1825 56.2793 21.1744 54.2351 25.2629C44.1618 45.4117 44.4023 44.4381 44.4023 46.25H44.4C44.4 51.3583 51.0265 55.5 59.2 55.5C67.3735 55.5 74 51.3583 74 46.25H73.9977ZM50.875 44.4L59.2 27.75L67.525 44.4H50.875ZM61.05 59.2H40.7V25.1195C43.4183 23.9297 45.4591 21.4796 46.0638 18.5H61.05C62.0721 18.5 62.9 17.6721 62.9 16.65V12.95C62.9 11.9279 62.0721 11.1 61.05 11.1H44.3584C42.6703 8.86612 40.0167 7.39999 37 7.39999C33.9833 7.39999 31.3297 8.86612 29.6416 11.1H12.95C11.9279 11.1 11.1 11.9279 11.1 12.95V16.65C11.1 17.6721 11.9279 18.5 12.95 18.5H27.9362C28.5409 21.4785 30.5805 23.9297 33.3 25.1195V59.2H12.95C11.9279 59.2 11.1 60.0279 11.1 61.05V64.75C11.1 65.7721 11.9279 66.6 12.95 66.6H61.05C62.0721 66.6 62.9 65.7721 62.9 64.75V61.05C62.9 60.0279 62.0721 59.2 61.05 59.2Z"/>
            </svg>
          ),
          href: "/observatorio/bal-comercial",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
    {
      title: "OUTROS",
      items: [
        {
          icon: (
            <svg viewBox="10 9 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_427_139" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
              <rect width="100" height="100" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_427_139)">
              <path d="M45.8327 79.1666H54.166V75H58.3327C59.5132 75 60.5028 74.6007 61.3014 73.8021C62.1 73.0035 62.4993 72.0139 62.4993 70.8333V58.3333C62.4993 57.1528 62.1 56.1632 61.3014 55.3646C60.5028 54.566 59.5132 54.1666 58.3327 54.1666H45.8327V50H62.4993V41.6666H54.166V37.5H45.8327V41.6666H41.666C40.4855 41.6666 39.4959 42.066 38.6973 42.8646C37.8987 43.6632 37.4993 44.6528 37.4993 45.8333V58.3333C37.4993 59.5139 37.8987 60.5035 38.6973 61.3021C39.4959 62.1007 40.4855 62.5 41.666 62.5H54.166V66.6666H37.4993V75H45.8327V79.1666ZM24.9993 91.6667C22.7077 91.6667 20.7459 90.8507 19.1139 89.2187C17.482 87.5868 16.666 85.625 16.666 83.3333V16.6666C16.666 14.375 17.482 12.4132 19.1139 10.7812C20.7459 9.14929 22.7077 8.33331 24.9993 8.33331H58.3327L83.3327 33.3333V83.3333C83.3327 85.625 82.5167 87.5868 80.8848 89.2187C79.2528 90.8507 77.291 91.6667 74.9993 91.6667H24.9993ZM54.166 33.3333V16.6666H24.9993V83.3333H74.9993V33.3333H54.166Z"/>
              </g>
            </svg>
          ),
          label: "Acesse o Boletim Econômico",
          href: "/boletim-economico",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
  ];