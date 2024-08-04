export interface LogoProps extends React.SVGAttributes<SVGSVGElement> {
}

export default function Logo({
  ...rest
}: LogoProps) {
  return (
    <img src="src/assets/logo.svg" width="200" height="200" />
  );
}