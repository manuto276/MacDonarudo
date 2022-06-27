import React from "react";

const DEFAULT_ICON_SIZE = '1.5rem';
export class Icon extends React.Component {
    size;
    color;
    onClick;
    id;
    className;

    constructor (props) {
        super(props);
        this.id = props.id;
        this.className = props.className;
        this.size = props.size ?? DEFAULT_ICON_SIZE;
        this.color = props.color;
        this.onClick = props.onClick;
    }
    
    path = () => null;

    viewBox = () => '0 0 48 48';

    render = () => <svg id={this.id} className={this.className} style={{fill: this.color ?? 'var(--floral-white)'}} width={this.size} height={this.size} viewBox={this.viewBox()} onClick={this.onClick}>{this.path()}</svg>;
}

export class AccountCircle extends Icon {
    path = () => <path d="M11.1 35.25Q14.25 33.05 17.35 31.875Q20.45 30.7 24 30.7Q27.55 30.7 30.675 31.875Q33.8 33.05 36.95 35.25Q39.15 32.55 40.075 29.8Q41 27.05 41 24Q41 16.75 36.125 11.875Q31.25 7 24 7Q16.75 7 11.875 11.875Q7 16.75 7 24Q7 27.05 7.95 29.8Q8.9 32.55 11.1 35.25ZM24 25.5Q21.1 25.5 19.125 23.525Q17.15 21.55 17.15 18.65Q17.15 15.75 19.125 13.775Q21.1 11.8 24 11.8Q26.9 11.8 28.875 13.775Q30.85 15.75 30.85 18.65Q30.85 21.55 28.875 23.525Q26.9 25.5 24 25.5ZM24 44Q19.9 44 16.25 42.425Q12.6 40.85 9.875 38.125Q7.15 35.4 5.575 31.75Q4 28.1 4 24Q4 19.85 5.575 16.225Q7.15 12.6 9.875 9.875Q12.6 7.15 16.25 5.575Q19.9 4 24 4Q28.15 4 31.775 5.575Q35.4 7.15 38.125 9.875Q40.85 12.6 42.425 16.225Q44 19.85 44 24Q44 28.1 42.425 31.75Q40.85 35.4 38.125 38.125Q35.4 40.85 31.775 42.425Q28.15 44 24 44ZM24 41Q26.75 41 29.375 40.2Q32 39.4 34.55 37.4Q32 35.6 29.35 34.65Q26.7 33.7 24 33.7Q21.3 33.7 18.65 34.65Q16 35.6 13.45 37.4Q16 39.4 18.625 40.2Q21.25 41 24 41ZM24 22.5Q25.7 22.5 26.775 21.425Q27.85 20.35 27.85 18.65Q27.85 16.95 26.775 15.875Q25.7 14.8 24 14.8Q22.3 14.8 21.225 15.875Q20.15 16.95 20.15 18.65Q20.15 20.35 21.225 21.425Q22.3 22.5 24 22.5ZM24 18.65Q24 18.65 24 18.65Q24 18.65 24 18.65Q24 18.65 24 18.65Q24 18.65 24 18.65Q24 18.65 24 18.65Q24 18.65 24 18.65Q24 18.65 24 18.65Q24 18.65 24 18.65ZM24 37.35Q24 37.35 24 37.35Q24 37.35 24 37.35Q24 37.35 24 37.35Q24 37.35 24 37.35Q24 37.35 24 37.35Q24 37.35 24 37.35Q24 37.35 24 37.35Q24 37.35 24 37.35Z"/>;
}

export class Add extends Icon {
    path = () => <path d="M22.5 38V25.5H10V22.5H22.5V10H25.5V22.5H38V25.5H25.5V38Z"/>;
}

export class Close extends Icon {
    path = () => <path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z"/>;
}

export class Delete extends Icon {
    path = () => <path d="M13.05 42Q11.85 42 10.95 41.1Q10.05 40.2 10.05 39V10.5H8V7.5H17.4V6H30.6V7.5H40V10.5H37.95V39Q37.95 40.2 37.05 41.1Q36.15 42 34.95 42ZM34.95 10.5H13.05V39Q13.05 39 13.05 39Q13.05 39 13.05 39H34.95Q34.95 39 34.95 39Q34.95 39 34.95 39ZM18.35 34.7H21.35V14.75H18.35ZM26.65 34.7H29.65V14.75H26.65ZM13.05 10.5V39Q13.05 39 13.05 39Q13.05 39 13.05 39Q13.05 39 13.05 39Q13.05 39 13.05 39Z"/>;
}

export class Done extends Icon {
    path = () => <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z"/>;
}

export class Edit extends Icon {
    path = () => <path d="M9 39H11.2L33.35 16.85L31.15 14.65L9 36.8ZM39.7 14.7 33.3 8.3 35.4 6.2Q36.25 5.35 37.5 5.35Q38.75 5.35 39.6 6.2L41.8 8.4Q42.65 9.25 42.65 10.5Q42.65 11.75 41.8 12.6ZM37.6 16.8 12.4 42H6V35.6L31.2 10.4ZM32.25 15.75 31.15 14.65 33.35 16.85Z"/>;
}

export class ListAlt extends Icon {
    path = () => <path d="M9 42Q7.8 42 6.9 41.1Q6 40.2 6 39V9Q6 7.8 6.9 6.9Q7.8 6 9 6H39Q40.2 6 41.1 6.9Q42 7.8 42 9V39Q42 40.2 41.1 41.1Q40.2 42 39 42ZM9 39H39Q39 39 39 39Q39 39 39 39V9Q39 9 39 9Q39 9 39 9H9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39ZM15 33.7Q15.6 33.7 16.05 33.25Q16.5 32.8 16.5 32.2Q16.5 31.6 16.05 31.15Q15.6 30.7 15 30.7Q14.4 30.7 13.95 31.15Q13.5 31.6 13.5 32.2Q13.5 32.8 13.95 33.25Q14.4 33.7 15 33.7ZM15 25.5Q15.6 25.5 16.05 25.05Q16.5 24.6 16.5 24Q16.5 23.4 16.05 22.95Q15.6 22.5 15 22.5Q14.4 22.5 13.95 22.95Q13.5 23.4 13.5 24Q13.5 24.6 13.95 25.05Q14.4 25.5 15 25.5ZM15 17.3Q15.6 17.3 16.05 16.85Q16.5 16.4 16.5 15.8Q16.5 15.2 16.05 14.75Q15.6 14.3 15 14.3Q14.4 14.3 13.95 14.75Q13.5 15.2 13.5 15.8Q13.5 16.4 13.95 16.85Q14.4 17.3 15 17.3ZM21.6 33.7H33.8V30.7H21.6ZM21.6 25.5H33.8V22.5H21.6ZM21.6 17.3H33.8V14.3H21.6ZM9 39Q9 39 9 39Q9 39 9 39V9Q9 9 9 9Q9 9 9 9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39Z"/>;
}

export class Remove extends Icon {
    path = () => <path d="M10 25.5v-3h28v3Z"/>;
}

export class Search extends Icon {
    path = () => <path d="M39.8 41.95 26.65 28.8Q25.15 30.1 23.15 30.825Q21.15 31.55 18.9 31.55Q13.5 31.55 9.75 27.8Q6 24.05 6 18.75Q6 13.45 9.75 9.7Q13.5 5.95 18.85 5.95Q24.15 5.95 27.875 9.7Q31.6 13.45 31.6 18.75Q31.6 20.9 30.9 22.9Q30.2 24.9 28.8 26.65L42 39.75ZM18.85 28.55Q22.9 28.55 25.75 25.675Q28.6 22.8 28.6 18.75Q28.6 14.7 25.75 11.825Q22.9 8.95 18.85 8.95Q14.75 8.95 11.875 11.825Q9 14.7 9 18.75Q9 22.8 11.875 25.675Q14.75 28.55 18.85 28.55Z"/>;
}

export class ShoppingCart extends Icon {
    path = () => <path d="M14.35 43.95Q12.85 43.95 11.8 42.9Q10.75 41.85 10.75 40.35Q10.75 38.85 11.8 37.8Q12.85 36.75 14.35 36.75Q15.8 36.75 16.875 37.8Q17.95 38.85 17.95 40.35Q17.95 41.85 16.9 42.9Q15.85 43.95 14.35 43.95ZM34.35 43.95Q32.85 43.95 31.8 42.9Q30.75 41.85 30.75 40.35Q30.75 38.85 31.8 37.8Q32.85 36.75 34.35 36.75Q35.8 36.75 36.875 37.8Q37.95 38.85 37.95 40.35Q37.95 41.85 36.9 42.9Q35.85 43.95 34.35 43.95ZM11.75 10.95 17.25 22.35H31.65Q31.65 22.35 31.65 22.35Q31.65 22.35 31.65 22.35L37.9 10.95Q37.9 10.95 37.9 10.95Q37.9 10.95 37.9 10.95ZM10.25 7.95H39.7Q41.3 7.95 41.725 8.925Q42.15 9.9 41.45 11.1L34.7 23.25Q34.2 24.1 33.3 24.725Q32.4 25.35 31.35 25.35H16.2L13.4 30.55Q13.4 30.55 13.4 30.55Q13.4 30.55 13.4 30.55H37.95V33.55H13.85Q11.75 33.55 10.825 32.15Q9.9 30.75 10.85 29L14.05 23.1L6.45 7H2.55V4H8.4ZM17.25 22.35H31.65Q31.65 22.35 31.65 22.35Q31.65 22.35 31.65 22.35Z"/>;
}

export class Menu extends Icon {
    path = () => <path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z"/>;
}

export class Facebook extends Icon {
    viewBox = () => '0 0 24 24';
    path = () => <path d="M22,12.0612423 C22,6.50443695 17.5230596,2 12.0012498,2 C6.47694038,2.00124984 2,6.50443695 2,12.0624922 C2,17.0831146 5.65704287,21.2450944 10.4364454,22 L10.4364454,14.9696288 L7.89926259,14.9696288 L7.89926259,12.0624922 L10.4389451,12.0624922 L10.4389451,9.8440195 C10.4389451,7.32308461 11.9325084,5.93075866 14.215973,5.93075866 C15.3108361,5.93075866 16.4544432,6.12698413 16.4544432,6.12698413 L16.4544432,8.60167479 L15.1933508,8.60167479 C13.952256,8.60167479 13.5648044,9.37782777 13.5648044,10.1739783 L13.5648044,12.0612423 L16.3369579,12.0612423 L15.8945132,14.968379 L13.5635546,14.968379 L13.5635546,21.9987502 C18.3429571,21.2438445 22,17.0818648 22,12.0612423 Z" />;
}

export class Instagram extends Icon {
    viewBox = () => '0 0 24 24';
    path = () => <path d="M12,2 C9.28625,2 8.945,2.0125 7.87875,2.06 C6.8125,2.11 6.08625,2.2775 5.45,2.525 C4.78261746,2.77602388 4.17811439,3.16978276 3.67875,3.67875 C3.17009518,4.17837014 2.77638409,4.78279984 2.525,5.45 C2.2775,6.085 2.10875,6.8125 2.06,7.875 C2.0125,8.94375 2,9.28375 2,12.00125 C2,14.71625 2.0125,15.05625 2.06,16.1225 C2.11,17.1875 2.2775,17.91375 2.525,18.55 C2.78125,19.2075 3.1225,19.765 3.67875,20.32125 C4.23375,20.8775 4.79125,21.22 5.44875,21.475 C6.08625,21.7225 6.81125,21.89125 7.87625,21.94 C8.94375,21.9875 9.28375,22 12,22 C14.71625,22 15.055,21.9875 16.1225,21.94 C17.18625,21.89 17.915,21.7225 18.55125,21.475 C19.2182036,21.2238511 19.8222732,20.8300968 20.32125,20.32125 C20.8775,19.765 21.21875,19.2075 21.475,18.55 C21.72125,17.91375 21.89,17.1875 21.94,16.1225 C21.9875,15.05625 22,14.71625 22,12 C22,9.28375 21.9875,8.94375 21.94,7.87625 C21.89,6.8125 21.72125,6.085 21.475,5.45 C21.2236518,4.78278164 20.829936,4.17834463 20.32125,3.67875 C19.8220398,3.16959454 19.2174924,2.7758068 18.55,2.525 C17.9125,2.2775 17.185,2.10875 16.12125,2.06 C15.05375,2.0125 14.715,2 11.9975,2 L12.00125,2 L12,2 Z M11.10375,3.8025 L12.00125,3.8025 C14.67125,3.8025 14.9875,3.81125 16.04125,3.86 C17.01625,3.90375 17.54625,4.0675 17.89875,4.20375 C18.365,4.385 18.69875,4.6025 19.04875,4.9525 C19.39875,5.3025 19.615,5.635 19.79625,6.1025 C19.93375,6.45375 20.09625,6.98375 20.14,7.95875 C20.18875,9.0125 20.19875,9.32875 20.19875,11.9975 C20.19875,14.66625 20.18875,14.98375 20.14,16.0375 C20.09625,17.0125 19.9325,17.54125 19.79625,17.89375 C19.6359273,18.3279493 19.3800338,18.7205471 19.0475,19.0425 C18.6975,19.3925 18.365,19.60875 17.8975,19.79 C17.5475,19.9275 17.0175,20.09 16.04125,20.135 C14.9875,20.1825 14.67125,20.19375 12.00125,20.19375 C9.33125,20.19375 9.01375,20.1825 7.96,20.135 C6.985,20.09 6.45625,19.9275 6.10375,19.79 C5.66937384,19.6299014 5.27640759,19.3744733 4.95375,19.0425 C4.62093851,18.7200418 4.36465376,18.3270719 4.20375,17.8925 C4.0675,17.54125 3.90375,17.01125 3.86,16.03625 C3.8125,14.9825 3.8025,14.66625 3.8025,11.995 C3.8025,9.325 3.8125,9.01 3.86,7.95625 C3.905,6.98125 4.0675,6.45125 4.205,6.09875 C4.38625,5.6325 4.60375,5.29875 4.95375,4.94875 C5.30375,4.59875 5.63625,4.3825 6.10375,4.20125 C6.45625,4.06375 6.985,3.90125 7.96,3.85625 C8.8825,3.81375 9.24,3.80125 11.10375,3.8 L11.10375,3.8025 L11.10375,3.8025 Z M17.33875,5.4625 C16.9100313,5.4625 16.5138788,5.69121869 16.2995195,6.06249999 C16.0851601,6.43378129 16.0851601,6.89121871 16.2995195,7.26250001 C16.5138788,7.63378131 16.9100313,7.8625 17.33875,7.8625 C18.0014917,7.8625 18.53875,7.32524169 18.53875,6.6625 C18.53875,5.99975831 18.0014917,5.4625 17.33875,5.4625 L17.33875,5.4625 Z M12.00125,6.865 C10.1473723,6.83607638 8.42180625,7.80854589 7.4864173,9.40940396 C6.55102835,11.010262 6.55102835,12.990988 7.4864173,14.591846 C8.42180625,16.1927041 10.1473723,17.1651736 12.00125,17.13625 C14.8063397,17.0924859 17.0573756,14.8060561 17.0573756,12.000625 C17.0573756,9.19519394 14.8063397,6.90876413 12.00125,6.865 Z M12.00125,8.66625 C13.8424293,8.66625 15.335,10.1588207 15.335,12 C15.335,13.8411793 13.8424293,15.33375 12.00125,15.33375 C10.1600707,15.33375 8.6675,13.8411793 8.6675,12 C8.6675,10.1588207 10.1600707,8.66625 12.00125,8.66625 Z" />;
}

export class Twitter extends Icon {
    viewBox = () => '0 0 24 24';
    path = () => <path d="M8.2825,21 C15.83,21 19.95875,14.4580184 19.95875,8.7947524 C19.95875,8.61168677 19.95875,8.42600592 19.95125,8.24294029 C20.7550737,7.63422858 21.448825,6.88060723 22,6.01738528 C21.2491429,6.36370704 20.453451,6.59195742 19.63875,6.69472811 C20.4969167,6.15813373 21.1396544,5.31384904 21.4475,4.31879777 C20.6412346,4.81846756 19.7587681,5.16923373 18.83875,5.3557338 C17.5670884,3.93900754 15.54472,3.59153047 13.9066723,4.50831949 C12.2686245,5.42510851 11.4227358,7.37790305 11.84375,9.27072304 C8.54414765,9.09764709 5.46974431,7.46797242 3.385,4.78692273 C2.29892369,6.74917976 2.85572975,9.25642785 4.6575,10.5168769 C4.00692481,10.4937548 3.37065108,10.3110061 2.8,9.98337138 L2.8,10.0422139 C2.80231267,12.0841553 4.17726649,13.8427147 6.09,14.2501081 C5.7378286,14.3515969 5.37403673,14.4021915 5.00875,14.4004835 C4.75122986,14.4013003 4.49422565,14.376342 4.24125,14.3259496 C4.77888145,16.0740289 6.31985792,17.2708081 8.075,17.3033813 C6.62069384,18.4982764 4.82425158,19.1463375 2.975,19.1431909 C2.64915095,19.1446302 2.3235289,19.1249785 2,19.0843484 C3.87689342,20.3360781 6.05662206,21.0007179 8.2825,21 Z" />;
}

export class OutlinedPhotoLibrary extends Icon {
    path = () => <path d="M19.4 27.9H33.7Q34.15 27.9 34.35 27.5Q34.55 27.1 34.3 26.7L30.45 21.55Q30.2 21.3 29.85 21.3Q29.5 21.3 29.25 21.55L24.7 27.3L22 24.05Q21.75 23.8 21.4 23.825Q21.05 23.85 20.85 24.15L18.85 26.7Q18.6 27.1 18.775 27.5Q18.95 27.9 19.4 27.9ZM14.85 34.9Q13.7 34.9 12.9 34.1Q12.1 33.3 12.1 32.15V8.75Q12.1 7.6 12.9 6.8Q13.7 6 14.85 6H38.25Q39.4 6 40.2 6.8Q41 7.6 41 8.75V32.15Q41 33.3 40.2 34.1Q39.4 34.9 38.25 34.9ZM14.85 33.4H38.25Q38.75 33.4 39.1 33.05Q39.45 32.7 39.45 32.15V8.75Q39.45 8.25 39.1 7.9Q38.75 7.55 38.25 7.55H14.85Q14.3 7.55 13.95 7.9Q13.6 8.25 13.6 8.75V32.15Q13.6 32.7 13.95 33.05Q14.3 33.4 14.85 33.4ZM9.75 40Q8.6 40 7.8 39.2Q7 38.4 7 37.25V13.1Q7 12.75 7.225 12.525Q7.45 12.3 7.8 12.3Q8.1 12.3 8.325 12.525Q8.55 12.75 8.55 13.1V37.25Q8.55 37.75 8.9 38.1Q9.25 38.45 9.75 38.45H33.9Q34.25 38.45 34.475 38.675Q34.7 38.9 34.7 39.25Q34.7 39.55 34.475 39.775Q34.25 40 33.9 40ZM13.6 7.55Q13.6 7.55 13.6 7.9Q13.6 8.25 13.6 8.75V32.15Q13.6 32.7 13.6 33.05Q13.6 33.4 13.6 33.4Q13.6 33.4 13.6 33.05Q13.6 32.7 13.6 32.15V8.75Q13.6 8.25 13.6 7.9Q13.6 7.55 13.6 7.55Z"/>;
}