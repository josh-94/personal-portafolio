import type { ReactNode } from 'react';

type Props = { translationKey: string; className?: string };

const bg = '#123056';
const navy = '#0B1F3A';
const ice = '#F8FAFC';
const cobalt = '#1D4ED8';
const green = '#22C55E';

function Frame({ children }: { children: ReactNode }) {
  return (
    <>
      <rect width="320" height="180" fill={bg} />
      {children}
    </>
  );
}

function Calendar() {
  return (
    <Frame>
      <rect x="78" y="28" width="164" height="124" rx="18" fill={navy} />
      <rect x="78" y="28" width="164" height="36" rx="18" fill={cobalt} />
      <rect x="78" y="48" width="164" height="16" fill={cobalt} />
      {[0, 1, 2, 3, 4].map((col) =>
        [0, 1, 2].map((row) => (
          <rect
            key={`${col}-${row}`}
            x={96 + col * 28}
            y={78 + row * 22}
            width="16"
            height="12"
            rx="4"
            fill={col === 2 && row === 1 ? green : ice}
            opacity={col === 2 && row === 1 ? 1 : 0.85}
          />
        )),
      )}
    </Frame>
  );
}

function Quote() {
  return (
    <Frame>
      <rect x="96" y="24" width="128" height="132" rx="16" fill={ice} />
      <rect x="114" y="44" width="72" height="8" rx="4" fill={cobalt} />
      <rect x="114" y="64" width="92" height="6" rx="3" fill={navy} opacity="0.35" />
      <rect x="114" y="80" width="80" height="6" rx="3" fill={navy} opacity="0.35" />
      <rect x="114" y="96" width="88" height="6" rx="3" fill={navy} opacity="0.35" />
      <rect x="114" y="120" width="92" height="16" rx="8" fill={green} />
    </Frame>
  );
}

function Checklist() {
  return (
    <Frame>
      <rect x="86" y="28" width="148" height="124" rx="16" fill={navy} />
      {[0, 1, 2].map((row) => (
        <g key={row}>
          <rect x="106" y={48 + row * 32} width="22" height="22" rx="7" fill={row === 2 ? ice : green} />
          {row < 2 && <path d={`M111 ${59 + row * 32} l4 4 8-9`} fill="none" stroke={navy} strokeWidth="2.4" strokeLinecap="round" />}
          <rect x="140" y={55 + row * 32} width={row === 1 ? 62 : 74} height="8" rx="4" fill={ice} />
        </g>
      ))}
    </Frame>
  );
}

function Orders() {
  return (
    <Frame>
      {[0, 1, 2].map((row) => (
        <g key={row} transform={`translate(${70 + row * 14} ${36 + row * 36})`}>
          <rect width="150" height="40" rx="12" fill={row === 1 ? cobalt : navy} />
          <rect x="16" y="16" width="78" height="8" rx="4" fill={ice} />
          <circle cx="124" cy="20" r="6" fill={green} />
        </g>
      ))}
    </Frame>
  );
}

function PathMark() {
  return (
    <Frame>
      <path d="M64 130 C 110 130, 120 48, 168 48 S 230 112, 268 70" fill="none" stroke={ice} strokeWidth="8" strokeLinecap="round" />
      <circle cx="168" cy="48" r="14" fill={green} />
      <circle cx="64" cy="130" r="8" fill={cobalt} />
    </Frame>
  );
}

function SplitStores() {
  return (
    <Frame>
      <rect x="36" y="36" width="112" height="108" rx="16" fill={navy} />
      <ellipse cx="92" cy="62" rx="28" ry="12" fill={ice} />
      <path d="M64 62 v48 c0 8 12 14 28 14 s28-6 28-14 V62" fill="none" stroke={ice} strokeWidth="6" />
      <rect x="172" y="36" width="112" height="108" rx="16" fill={cobalt} />
      {[0, 1, 2].map((row) => (
        <rect key={row} x="190" y={56 + row * 24} width="76" height="10" rx="5" fill={ice} />
      ))}
    </Frame>
  );
}

function Stages() {
  const labels = ['DEV', 'TEST', 'PROD'];
  return (
    <Frame>
      <path d="M78 90 H242" fill="none" stroke={ice} strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />
      {labels.map((label, index) => (
        <g key={label}>
          <rect x={48 + index * 82} y="62" width="68" height="56" rx="16" fill={index === 2 ? green : navy} />
          <text x={82 + index * 82} y="96" textAnchor="middle" fill={index === 2 ? navy : ice} fontFamily="IBM Plex Mono, ui-monospace, monospace" fontSize="13">
            {label}
          </text>
        </g>
      ))}
    </Frame>
  );
}

function FlowNote() {
  return (
    <Frame>
      <rect x="48" y="36" width="120" height="108" rx="16" fill={ice} />
      <rect x="68" y="58" width="72" height="8" rx="4" fill={cobalt} />
      <rect x="68" y="78" width="80" height="6" rx="3" fill={navy} opacity="0.4" />
      <rect x="68" y="94" width="64" height="6" rx="3" fill={navy} opacity="0.4" />
      <path d="M184 90 H236" fill="none" stroke={green} strokeWidth="6" strokeLinecap="round" />
      <path d="M224 76 l18 14 -18 14" fill="none" stroke={green} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  );
}

function CanvasScreen() {
  return (
    <Frame>
      <rect x="70" y="22" width="180" height="136" rx="22" fill={navy} />
      <rect x="90" y="42" width="88" height="12" rx="6" fill={ice} />
      <rect x="90" y="68" width="140" height="26" rx="10" fill={ice} />
      <rect x="90" y="104" width="140" height="26" rx="10" fill={ice} opacity="0.72" />
      <rect x="90" y="132" width="68" height="14" rx="7" fill={green} />
    </Frame>
  );
}

function FlowSteps() {
  return (
    <Frame>
      <rect x="108" y="18" width="104" height="44" rx="14" fill={navy} />
      <circle cx="132" cy="40" r="8" fill={ice} />
      <rect x="150" y="36" width="40" height="8" rx="4" fill={ice} />
      <path d="M160 66 V92" fill="none" stroke={green} strokeWidth="6" strokeLinecap="round" />
      <path d="M148 84 l12 12 12-12" fill="none" stroke={green} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="108" y="104" width="104" height="52" rx="16" fill={cobalt} />
      <rect x="128" y="124" width="64" height="8" rx="4" fill={ice} />
    </Frame>
  );
}

function LinkedSystems() {
  return (
    <Frame>
      <rect x="24" y="46" width="84" height="88" rx="16" fill={navy} />
      <ellipse cx="66" cy="70" rx="22" ry="9" fill={ice} />
      <path d="M44 70 v36 c0 7 10 12 22 12 s22-5 22-12 V70" fill="none" stroke={ice} strokeWidth="5" />
      <path d="M112 90 H208" fill="none" stroke={green} strokeWidth="6" strokeLinecap="round" />
      <circle cx="160" cy="90" r="8" fill={green} />
      <rect x="212" y="46" width="84" height="88" rx="16" fill={cobalt} />
      <rect x="228" y="66" width="52" height="8" rx="4" fill={ice} />
      <rect x="228" y="84" width="36" height="8" rx="4" fill={ice} opacity="0.7" />
      <rect x="228" y="106" width="44" height="12" rx="6" fill={ice} />
    </Frame>
  );
}

function Understand() {
  return (
    <Frame>
      <circle cx="72" cy="54" r="14" fill={ice} />
      <rect x="56" y="76" width="32" height="36" rx="12" fill={ice} />
      <rect x="124" y="56" width="68" height="78" rx="16" fill={cobalt} />
      <rect x="138" y="76" width="40" height="8" rx="4" fill={ice} />
      <rect x="138" y="94" width="28" height="8" rx="4" fill={ice} opacity="0.7" />
      <path d="M96 96 H124" fill="none" stroke={ice} strokeWidth="4" strokeLinecap="round" />
      <path d="M196 96 H214" fill="none" stroke={ice} strokeWidth="4" strokeLinecap="round" strokeDasharray="6 7" />
      <circle cx="242" cy="96" r="24" fill={green} />
      <path d="M232 86 l20 20 M252 86 l-20 20" fill="none" stroke={navy} strokeWidth="4" strokeLinecap="round" />
    </Frame>
  );
}

function FollowPath() {
  return (
    <Frame>
      <path d="M78 90 H242" fill="none" stroke={ice} strokeWidth="4" strokeLinecap="round" strokeDasharray="7 8" />
      {['1', '2', '3'].map((label, index) => (
        <g key={label}>
          <circle cx={78 + index * 82} cy="90" r="24" fill={index === 2 ? green : navy} />
          <text
            x={78 + index * 82}
            y="96"
            textAnchor="middle"
            fill={index === 2 ? navy : ice}
            fontFamily="IBM Plex Mono, ui-monospace, monospace"
            fontSize="16"
          >
            {label}
          </text>
        </g>
      ))}
    </Frame>
  );
}

function Nodes({ count = 3 }: { count?: number }) {
  return (
    <Frame>
      <path d="M70 90 H250" fill="none" stroke={ice} strokeWidth="4" strokeLinecap="round" />
      {Array.from({ length: count }, (_, index) => (
        <rect key={index} x={52 + index * 78} y="66" width="48" height="48" rx="14" fill={index === count - 1 ? green : index === 1 ? cobalt : navy} />
      ))}
    </Frame>
  );
}

const scenes: Record<string, ReactNode> = {
  understand: <Understand />,
  usable: <FollowPath />,
  govern: <Stages />,
  simplify: <CanvasScreen />,
  automate: <FlowSteps />,
  integrate: <LinkedSystems />,
  'vacation-manager': <Calendar />,
  quotations: <Quote />,
  'picking-sheet': <Checklist />,
  'commercial-orders': <Orders />,
  rumbo: <PathMark />,
  'dataverse-sql': <SplitStores />,
  pipelines: <Stages />,
  'document-a-flow': <FlowNote />,
  'sharepoint-repository': <Nodes />,
  'http-connector': <Nodes />,
  'dataverse-record': <SplitStores />,
  'sql-gateway': <Nodes count={2} />,
  'sharepoint-to-dataverse': <Nodes count={2} />,
  'scheduled-reminder': <FlowNote />,
  'approval-request': <Checklist />,
};

export function Cover({ translationKey, className }: Props) {
  return (
    <svg className={className ? `cover ${className}` : 'cover'} viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {scenes[translationKey] ?? <Nodes />}
    </svg>
  );
}
