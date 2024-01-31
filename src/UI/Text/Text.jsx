import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';


export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    bold,
    medium,
    onClick,
  } = prop;

  const classes = classNames(
    className,
    style[color],
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fsd${dsize}`]]: dsize},
    {[style[`fs${size}`]]: size},
    {[style.center]: center},
    {[style.bold]: bold},
    {[style.medium]: medium},
  );

  return (
    <As className={classes} href={href} onClick={onClick}>
      {children}
    </As>
  );
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  center: PropTypes.bool,
  onClick: PropTypes.func,
};

