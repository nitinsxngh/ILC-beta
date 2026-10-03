import React, { useEffect, useRef } from 'react';
import { tabsData, toolModules } from '../tools';

const Tools = ({ activeTab, onTabChange }) => {

  const sentinelRefs = useRef([]);
  const scrollFromTabClick = useRef(false);
  const activeTabRef = useRef(activeTab ?? tabsData[0].id);
  const resolvedActiveTab = activeTab ?? tabsData[0].id;
  const setResolvedActiveTab = onTabChange ?? (() => { });
  const activeIndex = Math.max(0, tabsData.findIndex((tab) => tab.id === resolvedActiveTab));

  activeTabRef.current = resolvedActiveTab;

  const scrollToStep = (tabId, behavior = 'smooth') => {
    const el = document.getElementById(`tools-step-${tabId}`);
    if (el) {
      el.scrollIntoView({ behavior, block: 'start' });
    }
  };

  useEffect(() => {
    const sentinels = sentinelRefs.current.filter(Boolean);
    if (!sentinels.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollFromTabClick.current) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const tabId = visible.target.dataset.tabId;
          if (tabId && tabId !== activeTabRef.current) {
            setResolvedActiveTab(tabId);
          }
        }
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.5, 1],
      });

    sentinels.forEach((sentinel) => observer.observe(sentinel));
    return () => observer.disconnect();
  }, [setResolvedActiveTab]);
  return (
    <section className="tools-section" id="tools">
      <div className="tools-scrolly-room" style={{ '--tools-steps': tabsData.length }}>
        {tabsData.map((tab, index) => (
          <div
            key={tab.id}
            id={`tools-step-${tab.id}`}
            ref={(el) => { sentinelRefs.current[index] = el; }}
            data-tab-id={tab.id}
            className="tools-scrolly-sentinel"
            style={{ '--step-index': index }}
            aria-hidden="true"
          />
        ))}
        <div className="tools-scrolly-stage">
          <div className="container tools-scrolly-inner">
            <div className="tools-scrolly-header">
              <div className="tools-header-global">
                <div className="badge-light">Core Features</div>
                <h2 className="tools-heading">The Tools That Build Your Career</h2>
              </div>
            </div>
            <div className="tools-scrolly-cards">
              {toolModules.map((mod, index) => {
                const { tab, LeftPanel, Visual } = mod;
                const leftPanelOnly = Boolean(tab.leftPanelOnly);
                return (
                  <article
                    id={`tools-card-${tab.id}`}
                    key={tab.id}
                    className={`tools-ctr-feature-card ${index === activeIndex ? 'is-visible' : ''}`}
                    style={{
                      backgroundImage: `url("${import.meta.env.BASE_URL}${tab.bg}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      zIndex: index + 1,
                    }}
                    aria-hidden={index !== activeIndex}
                  >
                    <div className="tools-left">
                      <LeftPanel tab={tab} />
                    </div>

                    <div className={`tools-right ${tab.rightClassName ?? ''}`}>
                      <Visual />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>

  );

};



export default Tools;

export { tabsData };


