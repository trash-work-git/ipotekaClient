import React from 'react';
import cn from 'classnames';
import styles from './Logo.module.css';
function Logo(props) {
    return (
        <a className={cn(styles.wrap, props.className)} href="#">
            <svg width="252" height="26" viewBox="0 0 252 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.37642 12.8153L12.446 0.363636H17.8153V20H12.625V7.50994L5.58097 20H0.173296V0.363636H5.37642V12.8153ZM21.5331 20V0.363636H38.7021V20H33.499V4.64631H26.6723V20H21.5331ZM51.2729 20.3835C49.2871 20.3835 47.5698 19.9616 46.1209 19.1179C44.6806 18.2656 43.5683 17.081 42.7843 15.5639C42.0002 14.0384 41.6081 12.2699 41.6081 10.2585C41.6081 8.23011 42.0002 6.45739 42.7843 4.94034C43.5683 3.41477 44.6806 2.23011 46.1209 1.38636C47.5698 0.534091 49.2871 0.107955 51.2729 0.107955C53.2587 0.107955 54.9718 0.534091 56.4121 1.38636C57.861 2.23011 58.9774 3.41477 59.7615 4.94034C60.5456 6.45739 60.9377 8.23011 60.9377 10.2585C60.9377 12.2699 60.5456 14.0384 59.7615 15.5639C58.9774 17.081 57.861 18.2656 56.4121 19.1179C54.9718 19.9616 53.2587 20.3835 51.2729 20.3835ZM51.2985 16.1648C52.2019 16.1648 52.9561 15.9091 53.5612 15.3977C54.1664 14.8778 54.6223 14.1705 54.9291 13.2756C55.2445 12.3807 55.4022 11.3622 55.4022 10.2202C55.4022 9.07812 55.2445 8.05966 54.9291 7.16477C54.6223 6.26989 54.1664 5.5625 53.5612 5.04261C52.9561 4.52273 52.2019 4.26278 51.2985 4.26278C50.3865 4.26278 49.6195 4.52273 48.9973 5.04261C48.3837 5.5625 47.9192 6.26989 47.6039 7.16477C47.297 8.05966 47.1436 9.07812 47.1436 10.2202C47.1436 11.3622 47.297 12.3807 47.6039 13.2756C47.9192 14.1705 48.3837 14.8778 48.9973 15.3977C49.6195 15.9091 50.3865 16.1648 51.2985 16.1648ZM61.9292 4.64631V0.363636H79.7247V4.64631H73.3966V20H68.2062V4.64631H61.9292ZM90.6239 20.3835C88.604 20.3835 86.8654 19.9744 85.408 19.1562C83.9591 18.3295 82.8427 17.1619 82.0586 15.6534C81.2745 14.1364 80.8824 12.3423 80.8824 10.2713C80.8824 8.25142 81.2745 6.47869 82.0586 4.95312C82.8427 3.42756 83.9463 2.23864 85.3696 1.38636C86.8015 0.534091 88.4804 0.107955 90.4066 0.107955C91.702 0.107955 92.908 0.316761 94.0245 0.734375C95.1495 1.14347 96.1296 1.76136 96.9648 2.58807C97.8086 3.41477 98.4648 4.45455 98.9336 5.70739C99.4023 6.9517 99.6367 8.40909 99.6367 10.0795V11.5753H83.0557V8.20028H94.5103C94.5103 7.41619 94.3398 6.72159 93.9989 6.11648C93.658 5.51136 93.185 5.03835 92.5799 4.69744C91.9833 4.34801 91.2887 4.1733 90.4961 4.1733C89.6694 4.1733 88.9364 4.36506 88.2972 4.74858C87.6665 5.12358 87.1722 5.63068 86.8142 6.26989C86.4563 6.90057 86.2731 7.60369 86.2645 8.37926V11.5881C86.2645 12.5597 86.4435 13.3991 86.8015 14.1065C87.1679 14.8139 87.6836 15.3594 88.3483 15.7429C89.0131 16.1264 89.8015 16.3182 90.7134 16.3182C91.3185 16.3182 91.8725 16.233 92.3753 16.0625C92.8782 15.892 93.3086 15.6364 93.6665 15.2955C94.0245 14.9545 94.2972 14.5369 94.4847 14.0426L99.5216 14.375C99.266 15.5852 98.7418 16.642 97.9492 17.5455C97.1651 18.4403 96.1509 19.1392 94.9066 19.642C93.6708 20.1364 92.2432 20.3835 90.6239 20.3835ZM102.543 20V0.363636H107.989V7.98295H109.523L114.867 0.363636H121.259L114.317 10.1051L121.335 20H114.867L110.021 13.0327H107.989V20H102.543ZM128.588 20.3707C127.335 20.3707 126.219 20.1534 125.238 19.7188C124.258 19.2756 123.483 18.6236 122.912 17.7628C122.349 16.8935 122.068 15.8111 122.068 14.5156C122.068 13.4247 122.268 12.5085 122.669 11.767C123.069 11.0256 123.615 10.429 124.305 9.97727C124.996 9.52557 125.78 9.18466 126.657 8.95455C127.544 8.72443 128.473 8.5625 129.444 8.46875C130.586 8.34943 131.507 8.23864 132.206 8.13636C132.905 8.02557 133.412 7.86364 133.727 7.65057C134.042 7.4375 134.2 7.12216 134.2 6.70455V6.62784C134.2 5.81818 133.944 5.19176 133.433 4.74858C132.93 4.3054 132.214 4.08381 131.285 4.08381C130.305 4.08381 129.525 4.30114 128.946 4.7358C128.366 5.16193 127.983 5.69886 127.795 6.34659L122.758 5.9375C123.014 4.74432 123.517 3.71307 124.267 2.84375C125.017 1.96591 125.984 1.29261 127.169 0.823862C128.362 0.346591 129.743 0.107955 131.311 0.107955C132.402 0.107955 133.446 0.235795 134.443 0.491476C135.449 0.747159 136.339 1.14347 137.115 1.6804C137.899 2.21733 138.517 2.90767 138.969 3.75142C139.42 4.58665 139.646 5.58807 139.646 6.75568V20H134.481V17.277H134.328C134.013 17.8906 133.591 18.4318 133.062 18.9006C132.534 19.3608 131.899 19.723 131.157 19.9872C130.416 20.2429 129.559 20.3707 128.588 20.3707ZM130.148 16.6122C130.949 16.6122 131.656 16.4545 132.27 16.1392C132.883 15.8153 133.365 15.3807 133.714 14.8352C134.064 14.2898 134.238 13.6719 134.238 12.9815V10.8977C134.068 11.0085 133.834 11.1108 133.535 11.2045C133.246 11.2898 132.917 11.3707 132.551 11.4474C132.184 11.5156 131.818 11.5795 131.451 11.6392C131.085 11.6903 130.753 11.7372 130.454 11.7798C129.815 11.8736 129.257 12.0227 128.78 12.2273C128.302 12.4318 127.932 12.7088 127.667 13.0582C127.403 13.3991 127.271 13.8253 127.271 14.3366C127.271 15.0781 127.54 15.6449 128.076 16.0369C128.622 16.4205 129.312 16.6122 130.148 16.6122ZM149.897 14.4389H155.177C155.203 15.0866 155.492 15.598 156.046 15.973C156.6 16.348 157.316 16.5355 158.194 16.5355C159.081 16.5355 159.826 16.331 160.431 15.9219C161.037 15.5043 161.339 14.9077 161.339 14.1321C161.339 13.6548 161.22 13.2415 160.981 12.892C160.742 12.5341 160.41 12.2528 159.984 12.0483C159.558 11.8437 159.064 11.7415 158.501 11.7415H155.676V8.17472H158.501C159.345 8.17472 159.992 7.97869 160.444 7.58665C160.904 7.1946 161.135 6.70454 161.135 6.11648C161.135 5.4517 160.896 4.91903 160.419 4.51847C159.95 4.10937 159.315 3.90483 158.514 3.90483C157.704 3.90483 157.031 4.08807 156.494 4.45455C155.965 4.8125 155.693 5.28125 155.676 5.8608H150.421C150.439 4.68466 150.792 3.66619 151.483 2.8054C152.181 1.9446 153.119 1.27983 154.295 0.81108C155.48 0.34233 156.805 0.107955 158.271 0.107955C159.873 0.107955 161.254 0.333807 162.413 0.785511C163.581 1.22869 164.475 1.86364 165.098 2.69034C165.728 3.51705 166.044 4.50142 166.044 5.64347C166.044 6.68324 165.703 7.55256 165.021 8.25142C164.339 8.95028 163.385 9.44886 162.157 9.74716V9.9517C162.967 10.0028 163.7 10.2202 164.356 10.6037C165.012 10.9872 165.537 11.5156 165.929 12.1889C166.321 12.8537 166.517 13.642 166.517 14.554C166.517 15.7727 166.159 16.8168 165.443 17.6861C164.735 18.5554 163.755 19.2244 162.502 19.6932C161.258 20.1534 159.831 20.3835 158.22 20.3835C156.652 20.3835 155.245 20.1577 154.001 19.706C152.765 19.2457 151.781 18.5724 151.048 17.6861C150.323 16.7997 149.94 15.7173 149.897 14.4389ZM167.674 25.7528V15.679H169.183C169.618 15.4062 169.967 14.9716 170.231 14.375C170.504 13.7784 170.726 13.0753 170.896 12.2656C171.075 11.456 171.211 10.5824 171.305 9.64489C171.407 8.69886 171.497 7.74432 171.574 6.78125L172.085 0.363636H187.145V15.679H190.187V25.7528H184.997V20H172.993V25.7528H167.674ZM174.603 15.679H182.005V4.55682H176.713L176.508 6.78125C176.363 8.87784 176.155 10.6591 175.882 12.125C175.609 13.5824 175.183 14.767 174.603 15.679ZM201.662 20.3835C199.642 20.3835 197.903 19.9744 196.446 19.1562C194.997 18.3295 193.88 17.1619 193.096 15.6534C192.312 14.1364 191.92 12.3423 191.92 10.2713C191.92 8.25142 192.312 6.47869 193.096 4.95312C193.88 3.42756 194.984 2.23864 196.407 1.38636C197.839 0.534091 199.518 0.107955 201.444 0.107955C202.74 0.107955 203.946 0.316761 205.062 0.734375C206.187 1.14347 207.167 1.76136 208.003 2.58807C208.846 3.41477 209.503 4.45455 209.971 5.70739C210.44 6.9517 210.674 8.40909 210.674 10.0795V11.5753H194.094V8.20028H205.548C205.548 7.41619 205.378 6.72159 205.037 6.11648C204.696 5.51136 204.223 5.03835 203.618 4.69744C203.021 4.34801 202.326 4.1733 201.534 4.1733C200.707 4.1733 199.974 4.36506 199.335 4.74858C198.704 5.12358 198.21 5.63068 197.852 6.26989C197.494 6.90057 197.311 7.60369 197.302 8.37926V11.5881C197.302 12.5597 197.481 13.3991 197.839 14.1065C198.206 14.8139 198.721 15.3594 199.386 15.7429C200.051 16.1264 200.839 16.3182 201.751 16.3182C202.356 16.3182 202.91 16.233 203.413 16.0625C203.916 15.892 204.346 15.6364 204.704 15.2955C205.062 14.9545 205.335 14.5369 205.522 14.0426L210.559 14.375C210.304 15.5852 209.78 16.642 208.987 17.5455C208.203 18.4403 207.189 19.1392 205.944 19.642C204.709 20.1364 203.281 20.3835 201.662 20.3835ZM222.453 20.3835C220.441 20.3835 218.711 19.9574 217.262 19.1051C215.822 18.2443 214.714 17.0511 213.938 15.5256C213.171 14 212.788 12.2443 212.788 10.2585C212.788 8.24716 213.176 6.48295 213.951 4.96591C214.735 3.44034 215.847 2.25142 217.288 1.39915C218.728 0.538352 220.441 0.107955 222.427 0.107955C224.14 0.107955 225.64 0.419034 226.927 1.04119C228.214 1.66335 229.232 2.53693 229.982 3.66193C230.732 4.78693 231.146 6.10795 231.222 7.625H226.083C225.938 6.64489 225.555 5.85653 224.933 5.25994C224.319 4.65483 223.514 4.35227 222.517 4.35227C221.673 4.35227 220.936 4.58239 220.305 5.04261C219.683 5.49432 219.197 6.15483 218.847 7.02415C218.498 7.89347 218.323 8.94602 218.323 10.1818C218.323 11.4347 218.494 12.5 218.835 13.3778C219.184 14.2557 219.674 14.9247 220.305 15.3849C220.936 15.8452 221.673 16.0753 222.517 16.0753C223.139 16.0753 223.697 15.9474 224.191 15.6918C224.694 15.4361 225.107 15.0653 225.431 14.5795C225.764 14.0852 225.981 13.4929 226.083 12.8026H231.222C231.137 14.3026 230.728 15.6236 229.995 16.7656C229.271 17.8991 228.269 18.7855 226.991 19.4247C225.713 20.0639 224.2 20.3835 222.453 20.3835ZM237.475 6.39773H243.343C245.942 6.39773 247.97 7.01989 249.428 8.2642C250.885 9.5 251.614 11.1534 251.614 13.2244C251.614 14.571 251.286 15.7557 250.63 16.7784C249.973 17.7926 249.027 18.5852 247.791 19.1562C246.556 19.7188 245.073 20 243.343 20H234.061V0.363636H239.264V15.7173H243.343C244.255 15.7173 245.005 15.4872 245.593 15.027C246.181 14.5668 246.479 13.9787 246.487 13.2628C246.479 12.5043 246.181 11.8864 245.593 11.4091C245.005 10.9233 244.255 10.6804 243.343 10.6804H237.475V6.39773Z"
                    fill="#00071F"/>
            </svg>
        </a>
    );
}

export default Logo;
