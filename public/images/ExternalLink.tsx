import { IconProps } from './types';

const ExternalLink = (props: IconProps) => (
  <svg
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      id="Vector"
      d="M7.79321 2.5H3.29321C2.89539 2.5 2.51386 2.65804 2.23255 2.93934C1.95125 3.22064 1.79321 3.60218 1.79321 4V11.5C1.79321 11.8978 1.95125 12.2794 2.23255 12.5607C2.51386 12.842 2.89539 13 3.29321 13H10.7932C11.191 13 11.5726 12.842 11.8539 12.5607C12.1352 12.2794 12.2932 11.8978 12.2932 11.5V7M7.04321 7.75L13.7932 1M13.7932 1H10.0432M13.7932 1V4.75"
      stroke="#A6A6A6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ExternalLink;
