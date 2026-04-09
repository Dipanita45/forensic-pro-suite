'use client';

import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const THREAT_ACTORS = [
  { name: 'Node-Alpha', coordinates: [-74.006, 40.7128] as [number, number], severity: 'high' },
  { name: 'Node-Bravo', coordinates: [2.3522, 48.8566] as [number, number], severity: 'medium' },
  { name: 'Node-Charlie', coordinates: [139.6917, 35.6895] as [number, number], severity: 'high' },
  { name: 'Node-Delta', coordinates: [37.6173, 55.7558] as [number, number], severity: 'low' },
  { name: 'Node-Echo', coordinates: [116.4074, 39.9042] as [number, number], severity: 'medium' },
  { name: 'Node-Foxtrot', coordinates: [28.9784, 41.0082] as [number, number], severity: 'low' },
];

const severityColor: Record<string, string> = {
  high: '#ef4444',
  medium: '#f59e0b',
  low: '#10b981',
};

export default function ForensicMap() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-bold text-slate-400 font-mono uppercase tracking-widest">
          Geospatial Threat Attribution
        </h2>
        <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
          {Object.entries(severityColor).map(([level, color]) => (
            <span key={level} className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: color }} />
              {level}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
        <ComposableMap
          projection="geoMercator"
          style={{ width: '100%', height: '320px' }}
          projectionConfig={{ scale: 120 }}
        >
          <ZoomableGroup>
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#1e293b"
                    stroke="#334155"
                    strokeWidth={0.5}
                    style={{ default: { outline: 'none' }, hover: { outline: 'none', fill: '#334155' }, pressed: { outline: 'none' } }}
                  />
                ))
              }
            </Geographies>

            {THREAT_ACTORS.map((actor) => (
              <Marker key={actor.name} coordinates={actor.coordinates}>
                <circle r={5} fill={severityColor[actor.severity]} opacity={0.9} />
                <circle r={9} fill={severityColor[actor.severity]} opacity={0.2} />
                <text
                  textAnchor="middle"
                  y={-12}
                  style={{ fontFamily: 'monospace', fontSize: '8px', fill: '#94a3b8' }}
                >
                  {actor.name}
                </text>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
}
