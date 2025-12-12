import '../index.css';
import { motion } from 'framer-motion';
import { Icon } from '../icons.jsx';
import { useLang } from '../layout/Layout.jsx';
import { useMemo, useState } from 'react';

export default function Home() {
  const { lang } = useLang();
  const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
  const withBase = (p) => `${base}${p.startsWith('/') ? p : `/${p}`}`;

  const copy = useMemo(
    () => ({
      zh: {
        badge: 'UK MEDIA HOUSE',
        heroTitle: '叙事创意 · 跨界媒体 · 高奢审美',
        heroDesc: '从影视、美妆到品牌新媒体，以电影级镜头语言与时尚美学，打造具有传播力的整合内容。',
        heroCTA: '预约创意会议',
        heroSecondary: '查看作品集',
        heroPoints: ['伦敦制作团队', '跨界创意合成', '一站式内容增长'],
        capabilitiesTitle: '核心能力矩阵',
        capabilitiesDesc: '全链路媒体运营，覆盖创意策略、拍摄执行、数字传播与商业化。',
        ctaDeep: '预约深度沟通',
        storiesTitle: '标志性作品与媒体事件',
        storiesDesc: '以情绪、节奏与质感，讲述品牌与人物的独特叙事。',
        ctaContact: '和团队聊聊',
        capabilityList: [
          {
            title: '影视创意与导演组',
            desc: '电影级分镜脚本、导演调度与叙事节奏控制，精准输出品牌语境。',
            icon: 'Film'
          },
          {
            title: '高级造型与美学',
            desc: '秀场级妆造体系与时尚造型指导，为人物与品牌打造高辨识度的视觉形象。',
            icon: 'Sparkles'
          },
          {
            title: '品牌数字运营',
            desc: '多平台传播策略、互动包装与内容矩阵，持续释放声量与转化。',
            icon: 'Broadcast'
          },
          {
            title: '跨界活动与发布',
            desc: '私享会、发布会与异业联名整合执行，沉浸式体验驱动商业价值。',
            icon: 'Globe2'
          }
        ],
        storyList: [
          {
            title: '高端婚礼电影 · 异地旅拍',
            desc: '在伦敦与阿马尔菲取景，辅以电影级调色与音乐监制，完成人物成长的叙事闭环。',
            image: '/portfolio/wedding.jpg'
          },
          {
            title: '奢品发布 · 影像大片',
            desc: '以动静结合的叙事蒙太奇呈现珠宝与时装系列，将质感与故事性同频输出。',
            image: '/portfolio/editorial.jpg'
          },
          {
            title: '企业品牌故事 · 纪录短片',
            desc: '以人物访谈与场景再现交织，刻画品牌精神与团队温度，塑造可信的公开形象。',
            image: '/portfolio/corporate.jpg'
          }
        ]
      },
      en: {
        badge: 'UK MEDIA HOUSE',
        heroTitle: 'Narrative Creativity · Cross‑Media Vision · Luxe Aesthetics',
        heroDesc: 'From film and beauty to brand media, we craft cinematic stories and fashion‑grade visuals that travel across platforms.',
        heroCTA: 'Book a creative session',
        heroSecondary: 'View portfolio',
        heroPoints: ['London production crew', 'Hybrid creative lab', 'Full‑funnel content growth'],
        capabilitiesTitle: 'Integrated capabilities',
        capabilitiesDesc: 'End‑to‑end media operation covering strategy, production, digital growth and commercialization.',
        ctaDeep: 'Book a deep‑dive',
        storiesTitle: 'Signature stories & media moments',
        storiesDesc: 'Emotion, rhythm and texture woven together to express the soul of brands and people.',
        ctaContact: 'Talk to the team',
        capabilityList: [
          {
            title: 'Film direction & creative',
            desc: 'Cinematic scripting, directing and pacing that deliver the right narrative for your audience.',
            icon: 'Film'
          },
          {
            title: 'Haute styling & aesthetics',
            desc: 'Runway‑level makeup and fashion direction that builds a distinctive visual identity.',
            icon: 'Sparkles'
          },
          {
            title: 'Brand digital ops',
            desc: 'Cross‑platform amplification, interaction design and content systems that keep momentum.',
            icon: 'Broadcast'
          },
          {
            title: 'Experiences & launches',
            desc: 'Private showcases, launches and cross‑over collaborations crafted as immersive stories.',
            icon: 'Globe2'
          }
        ],
        storyList: [
          {
            title: 'Destination wedding film',
            desc: 'Shot between London and Amalfi with cinematic grading and bespoke score to complete a character arc.',
            image: '/portfolio/wedding.jpg'
          },
          {
            title: 'Luxury launch editorial',
            desc: 'Montage of motion and stills to unveil jewelry and couture, balancing texture with narrative.',
            image: '/portfolio/editorial.jpg'
          },
          {
            title: 'Corporate story documentary',
            desc: 'Interviews mixed with staged vignettes to capture the brand spirit and team warmth authentically.',
            image: '/portfolio/corporate.jpg'
          }
        ]
      }
    }),
    []
  );

  const t = copy[lang] || copy.en;

  const floatIn = (delay = 0) => ({
    initial: { y: 24, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.7, ease: 'easeOut', delay }
  });

  return (
    <div className="bg-[#05060b] text-white min-h-screen">
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-70"
          style={{ background: 'radial-gradient(circle at 10% 20%, rgba(207,175,107,0.28), transparent 40%), radial-gradient(circle at 80% 10%, rgba(116,85,210,0.22), transparent 35%), radial-gradient(circle at 50% 80%, rgba(32,142,155,0.25), transparent 40%)' }}
        />
        <section className="relative max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="relative">
              <motion.div {...floatIn(0)} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#E7D5A5] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <span className="w-2 h-2 rounded-full bg-[#CFAF6B] animate-pulse" />
                {t.badge}
              </motion.div>
              <motion.h1
                {...floatIn(0.1)}
                className="mt-6 text-3xl md:text-5xl lg:text-6xl font-black leading-[1.05] drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                {t.heroTitle}
              </motion.h1>
              <motion.p {...floatIn(0.18)} className="mt-5 text-base md:text-lg text-white/80 max-w-2xl leading-8">
                {t.heroDesc}
              </motion.p>

              <motion.div {...floatIn(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={withBase('/pages/contact.html')}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#CFAF6B] via-[#b89151] to-[#8b6a2f] px-5 py-3 text-sm font-semibold text-[#0c0c0c] shadow-[0_18px_42px_rgba(0,0,0,0.25)] hover:translate-y-[-1px] transition-transform"
                >
                  <Icon name="CalendarDays" />
                  {t.heroCTA}
                </a>
                <a
                  href={withBase('/pages/portfolio.html')}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:border-[#CFAF6B] hover:text-[#CFAF6B] transition-colors"
                >
                  <Icon name="Play" />
                  {t.heroSecondary}
                </a>
              </motion.div>

              <motion.div {...floatIn(0.3)} className="mt-10 flex flex-wrap items-center gap-3">
                {t.heroPoints.map((point) => (
                  <div
                    key={point}
                    className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.15em] text-white/70"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#CFAF6B]" />
                    {point}
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative"
            >
              <div className="absolute -left-12 -top-10 w-28 h-28 rounded-full bg-[#CFAF6B]/30 blur-3xl" />
              <div className="absolute right-0 -bottom-12 w-40 h-40 rounded-full bg-[#9f83ff]/25 blur-3xl" />
              <div className="relative rounded-[28px] bg-gradient-to-br from-white/15 via-white/6 to-white/4 p-[1.5px] border border-white/10 shadow-[0_25px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <div className="rounded-[26px] overflow-hidden bg-[#0b0d16]/90 border border-white/10">
                  <HeroImage withBase={withBase} className="w-full h-[440px] object-cover" />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute left-4 bottom-4 text-white/90">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#CFAF6B]">Signature Frame</div>
                    <div className="text-base font-semibold">London · Shanghai · Toronto</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div {...floatIn(0)} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <div className="text-[#CFAF6B] uppercase tracking-[0.25em] text-xs">{t.capabilitiesTitle}</div>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">{t.capabilitiesDesc}</h2>
          </div>
          <a
            href={withBase('/pages/contact.html')}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:border-[#CFAF6B] hover:text-[#CFAF6B] transition-colors"
          >
            <Icon name="MessageSquare" />
            {t.ctaDeep}
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.capabilityList.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: idx * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/6 via-white/4 to-transparent p-[1px] overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle at 30% 20%, rgba(207,175,107,0.35), transparent 40%)' }} />
              <div className="relative h-full rounded-2xl bg-[#0d0f18]/70 p-5 flex flex-col gap-3 shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/8 border border-white/10 text-[#CFAF6B]">
                  <Icon name={item.icon} />
                </div>
                <div className="text-lg font-semibold">{item.title}</div>
                <p className="text-sm text-white/70 leading-6">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-[#CFAF6B] uppercase tracking-[0.25em] text-xs">{t.storiesTitle}</div>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">{t.storiesDesc}</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {t.storyList.map((story, idx) => (
            <motion.article
              key={story.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: 'easeOut', delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
            >
              <div className="overflow-hidden h-56 bg-black">
                <img
                  src={withBase(story.image)}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="text-[#CFAF6B] text-xs tracking-[0.2em] uppercase">Feature</div>
                <h3 className="text-xl font-semibold">{story.title}</h3>
                <p className="text-sm text-white/70 leading-6">{story.desc}</p>
                <div className="inline-flex items-center gap-2 text-sm text-[#CFAF6B]">
                  <span>View case</span>
                  <Icon name="ArrowRight" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#10121c] via-[#0b0e15] to-[#0c0f1b] p-8 md:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-[#CFAF6B]/25 blur-3xl" />
          <div className="absolute right-0 -bottom-12 h-40 w-40 rounded-full bg-[#7e9bff]/18 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="text-[#CFAF6B] uppercase tracking-[0.25em] text-xs">Media partnership</div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">{t.heroTitle}</h3>
              <p className="text-white/75 text-sm md:text-base leading-7">{t.heroDesc}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={withBase('/pages/contact.html')}
                className="inline-flex items-center gap-2 rounded-full bg-[#CFAF6B] px-5 py-3 text-sm font-semibold text-[#0c0c0c] shadow-[0_16px_38px_rgba(0,0,0,0.25)] hover:translate-y-[-1px] transition-transform"
              >
                <Icon name="Phone" />
                {t.ctaContact}
              </a>
              <a
                href={withBase('/pages/about.html')}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:border-[#CFAF6B] hover:text-[#CFAF6B] transition-colors"
              >
                <Icon name="Users" />
                {t.heroSecondary}
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function HeroImage({ withBase, className }) {
  const [rel, setRel] = useState('/hero-bg-city.jpg');
  const src = withBase(rel);
  return (
    <img
      src={src}
      alt="hero"
      className={className || 'w-[360px] lg:w-[420px] h-[240px] lg:h-[300px] object-cover'}
      onError={() => setRel((prev) => (prev === '/hero-company.jpg' ? prev : '/hero-company.jpg'))}
      loading="eager"
      decoding="async"
    />
  );
}
