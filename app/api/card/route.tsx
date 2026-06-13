import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

const COLORS = {
  navy: '#071A2B',
  navy2: '#0B2A3B',
  gold: '#F2C94C',
  emerald: '#0FA37F',
  pale: '#EAF7F2',
  white: '#FFFFFF',
  muted: '#B8C7D1',
  danger: '#E46060',
};

function clean(value: string | null, fallback: string, max: number) {
  const normalized = (value || fallback).replace(/\s+/g, ' ').trim();
  return normalized.slice(0, max);
}

function accentColor(accent: string) {
  if (accent === 'emerald') return COLORS.emerald;
  if (accent === 'red') return COLORS.danger;
  return COLORS.gold;
}

function templateLabel(template: string) {
  const labels: Record<string, string> = {
    TERM: 'TUSHUNCHA',
    COMPARISON: 'QIYOSIY TAHLIL',
    CASE: 'AMALIY MISOL',
    ANALYSIS: 'IQTISODIY TAHLIL',
    REFLECTION: 'TAFAKKUR',
  };
  return labels[template] || 'TAFAKKUR MOLIYA';
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const template = clean(searchParams.get('template'), 'TERM', 24).toUpperCase();
  const headline = clean(searchParams.get('headline'), 'Tafakkur Moliya', 78);
  const subtitle = clean(searchParams.get('subtitle'), 'Ilm, tafakkur va moliyaviy mas’uliyat', 130);
  const icon = clean(searchParams.get('icon'), '🧠', 6);
  const badge = clean(searchParams.get('badge'), templateLabel(template), 30);
  const accent = accentColor(clean(searchParams.get('accent'), 'gold', 16).toLowerCase());

  const isComparison = template === 'COMPARISON';
  const isReflection = template === 'REFLECTION';
  const isAnalysis = template === 'ANALYSIS';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '675px',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navy2} 58%, #0E3C36 100%)`,
          color: COLORS.white,
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{
          position:'absolute', inset:0, opacity:0.12,
          backgroundImage:
            'linear-gradient(30deg, transparent 12%, rgba(255,255,255,.35) 12.5%, transparent 13%), linear-gradient(150deg, transparent 12%, rgba(255,255,255,.25) 12.5%, transparent 13%)',
          backgroundSize:'86px 86px',
        }} />

        <div style={{
          position:'absolute', width:360, height:360, borderRadius:360,
          right:-100, top:-110, background:accent, opacity:0.18,
        }} />
        <div style={{
          position:'absolute', width:250, height:250, borderRadius:250,
          left:-90, bottom:-110, background:COLORS.gold, opacity:0.13,
        }} />

        <div style={{
          width:'100%', height:'100%', padding:'64px 72px',
          display:'flex', flexDirection:'column', justifyContent:'space-between',
          position:'relative',
        }}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{display:'flex', alignItems:'center', gap:16}}>
              <div style={{
                width:58, height:58, borderRadius:18, display:'flex',
                alignItems:'center', justifyContent:'center',
                background:'rgba(255,255,255,.10)', border:`1px solid ${accent}`,
                fontSize:34,
              }}>{icon}</div>
              <div style={{display:'flex', flexDirection:'column'}}>
                <div style={{fontSize:21, letterSpacing:2.4, color:accent, fontWeight:700}}>TAFAKKUR MOLIYA</div>
                <div style={{fontSize:15, color:COLORS.muted, marginTop:3}}>Islom moliyasi va smart budgeting</div>
              </div>
            </div>
            <div style={{
              padding:'10px 18px', borderRadius:999, fontSize:16, fontWeight:700,
              letterSpacing:1.4, color:accent, border:`1px solid ${accent}`,
              background:'rgba(255,255,255,.05)'
            }}>{badge}</div>
          </div>

          <div style={{display:'flex', alignItems:'center', gap:42}}>
            <div style={{flex:1, display:'flex', flexDirection:'column'}}>
              <div style={{
                width:92, height:8, borderRadius:8, background:accent, marginBottom:26
              }} />
              <div style={{
                fontSize: headline.length > 46 ? 54 : 64,
                lineHeight:1.08, fontWeight:800, letterSpacing:-1.5,
                maxWidth:820,
              }}>{headline}</div>
              <div style={{
                fontSize:28, lineHeight:1.35, color:COLORS.pale, marginTop:22,
                maxWidth:830,
              }}>{subtitle}</div>
            </div>

            <div style={{
              width:230, height:230, borderRadius:48,
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:110,
              background: isReflection
                ? 'linear-gradient(145deg, rgba(242,201,76,.22), rgba(15,163,127,.20))'
                : isAnalysis
                ? 'linear-gradient(145deg, rgba(15,163,127,.26), rgba(255,255,255,.08))'
                : 'linear-gradient(145deg, rgba(255,255,255,.12), rgba(242,201,76,.12))',
              border:`1px solid ${accent}`,
              boxShadow:'0 24px 80px rgba(0,0,0,.24)',
              transform: isComparison ? 'rotate(2deg)' : 'none',
            }}>{icon}</div>
          </div>

          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{display:'flex', gap:10}}>
              <div style={{width:12, height:12, borderRadius:12, background:COLORS.emerald}} />
              <div style={{width:12, height:12, borderRadius:12, background:COLORS.gold}} />
              <div style={{width:12, height:12, borderRadius:12, background:COLORS.white, opacity:.65}} />
            </div>
            <div style={{fontSize:18, color:COLORS.muted}}>Ilm • Tafakkur • Omonat • Mas’uliyat</div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 675,
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      },
    }
  );
}