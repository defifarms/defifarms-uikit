import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg
      {...props}
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="mask0_1:312" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_1:312)">
        <path d="M18.5415 17.8091H18.2601C17.2188 17.278 16.1776 16.751 15.1363 16.2283C15.063 16.2 14.9819 16.2 14.9086 16.2283C14.16 16.5314 13.3661 16.7077 12.5595 16.75C11.616 16.8161 10.669 16.6909 9.77516 16.3817C8.88137 16.0725 8.05931 15.5859 7.35839 14.9509C6.68832 14.3684 6.15609 13.6442 5.80021 12.8308C5.44432 12.0173 5.27368 11.135 5.30061 10.2475C5.32754 9.36003 5.55137 8.48964 5.95592 7.69927C6.36047 6.90891 6.93563 6.21834 7.63979 5.67751C8.40451 5.05885 9.28991 4.60657 10.2394 4.3496C11.1889 4.09264 12.1815 4.03663 13.1539 4.18517C14.6651 4.36546 16.0728 5.04538 17.1535 6.117C18.1769 7.09018 18.8201 8.3961 18.9679 9.80058C19.1156 11.2051 18.7582 12.6162 17.9597 13.7811C17.9323 13.8208 17.915 13.8667 17.9095 13.9147C17.904 13.9626 17.9104 14.0112 17.9281 14.0561C18.2422 15.0257 18.552 15.9985 18.8577 16.9744C18.9999 17.4171 18.9335 17.5847 18.5415 17.8091ZM10.5296 10.4296C10.5296 10.3251 10.4986 10.2228 10.4404 10.1359C10.3823 10.049 10.2996 9.98137 10.2029 9.9415C10.1063 9.90163 9.99995 9.89137 9.89744 9.912C9.79493 9.93263 9.70085 9.98323 9.62713 10.0574C9.55341 10.1316 9.50338 10.2259 9.48336 10.3286C9.46335 10.4312 9.47425 10.5375 9.5147 10.6339C9.55515 10.7303 9.62333 10.8125 9.71058 10.8702C9.79782 10.9278 9.90021 10.9583 10.0048 10.9576C10.143 10.9529 10.2742 10.8956 10.3717 10.7975C10.4692 10.6994 10.5257 10.5679 10.5296 10.4296ZM12.6385 10.4296C12.6441 10.3571 12.6347 10.2841 12.6108 10.2154C12.5869 10.1466 12.549 10.0836 12.4996 10.0302C12.4502 9.97674 12.3902 9.93412 12.3236 9.90497C12.2569 9.87582 12.1849 9.86078 12.1121 9.86078C12.0393 9.86078 11.9673 9.87582 11.9006 9.90497C11.8339 9.93412 11.774 9.97674 11.7245 10.0302C11.6751 10.0836 11.6373 10.1466 11.6134 10.2154C11.5895 10.2841 11.58 10.3571 11.5856 10.4296C11.5959 10.5622 11.6558 10.686 11.7534 10.7763C11.851 10.8666 11.9791 10.9168 12.1121 10.9168C12.2451 10.9168 12.3731 10.8666 12.4707 10.7763C12.5683 10.686 12.6282 10.5622 12.6385 10.4296ZM14.7474 10.4296C14.7486 10.3251 14.7188 10.2225 14.6617 10.1349C14.6046 10.0473 14.5228 9.97865 14.4266 9.93763C14.3304 9.8966 14.2242 9.88506 14.1215 9.90446C14.0187 9.92386 13.924 9.97333 13.8494 10.0466C13.7748 10.1199 13.7237 10.2136 13.7024 10.316C13.6812 10.4184 13.6908 10.5248 13.7301 10.6217C13.7694 10.7186 13.8366 10.8016 13.9231 10.8603C14.0097 10.919 14.1117 10.9507 14.2162 10.9513C14.3535 10.9483 14.4845 10.8935 14.583 10.7979C14.6815 10.7023 14.7402 10.573 14.7474 10.4359V10.4296Z" fill="white" />
        <path d="M1 7.83385C1.0664 7.48922 1.11067 7.14143 1.20236 6.80312C1.41557 6.01326 1.78253 5.27323 2.28222 4.62543C2.78191 3.97763 3.40448 3.43478 4.11431 3.02799C5.22895 2.366 6.49919 2.01138 7.79554 2.00027C9.09189 1.98916 10.368 2.32196 11.4938 2.96476L11.633 3.05961C11.2883 3.10704 10.9658 3.13865 10.6465 3.19556C7.77563 3.70144 5.21462 5.75342 4.46528 8.66539C4.22405 9.5635 4.16748 10.5012 4.29899 11.4218C4.43051 12.3424 4.74737 13.2268 5.23042 14.0214C5.25888 14.072 5.28732 14.1226 5.31894 14.1732C5.29997 14.1732 5.28416 14.189 5.281 14.1732C5.03754 14.0151 4.82888 14.1099 4.60124 14.2301C3.70962 14.6948 2.80852 15.1406 1.91375 15.5991C1.81534 15.6675 1.69696 15.7013 1.57725 15.6951C1.45755 15.689 1.34329 15.6432 1.25243 15.565C1.16158 15.4868 1.09928 15.3807 1.07534 15.2632C1.05139 15.1458 1.06715 15.0237 1.12015 14.9162C1.43632 13.9213 1.7525 12.9264 2.06867 11.9315C2.08563 11.8859 2.09076 11.8367 2.08357 11.7886C2.07638 11.7405 2.05711 11.695 2.02757 11.6564C1.47035 10.8501 1.12662 9.91566 1.02846 8.94046C1.02192 8.89562 1.0124 8.85125 1 8.80767V7.83385Z" fill="white" />
      </g>
    </svg>
  );
};

export default Icon;