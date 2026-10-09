import { ACCENT, MARK_BLUE, MARK_NAVY, MARK_NAVY_STROKE, MARK_NODE, type AccentName } from './mark-geometry';

type Props = {
  accent?: AccentName;
  onNavy?: boolean;
  title?: string;
  className?: string;
};

export function Mark({ accent = 'green', onNavy = false, title = 'codewithjosh', className }: Props) {
  return (
    <svg className={className ? `mark ${className}` : 'mark'} viewBox="0 0 64 64" role="img" aria-label={title}>
      <path fill="#1D4ED8" d={MARK_BLUE} />
      <path
        d={MARK_NAVY}
        fill="none"
        stroke={onNavy ? '#F8FAFC' : 'currentColor'}
        strokeWidth={MARK_NAVY_STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle fill={ACCENT[accent]} cx={MARK_NODE.cx} cy={MARK_NODE.cy} r={MARK_NODE.r} />
    </svg>
  );
}
