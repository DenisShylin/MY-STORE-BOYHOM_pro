import { useState } from "react";
import { ChevronRight, Download, FileDown } from "lucide-react";
import "./Products.css";

const Products = () => {
  const [activeSection, setActiveSection] = useState("main");

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    {
      id: "latest-version",
      title: "Latest Firmware Version",
      content: {
        version: "v1.0.4",
        date: "April 13, 2024",
        description:
          "This major update includes numerous stability improvements, new features, and performance optimizations. The update is recommended for all R36S users.",
        highlights: [
          "Improved overall system stability",
          "Optimized memory management",
          "Added support for new formats",
          "Fixed critical bugs from previous versions",
        ],
      },
    },
    {
      id: "new-features",
      title: "Main New Features",
      content: [
        "Bluetooth Support (A2DP audio and BLE HID)",
        "Vulkan Linux Driver Support (updated GLES/Vulkan libraries 1.11 → 1.19)",
        "Media Player with Hardware Decoding",
        "Moonlight Streaming Support",
        "Advanced Display Color Settings",
        "Additional Language Support",
      ],
    },
    {
      id: "media-player",
      title: "Media Player Features",
      content: [
        "Hardware video decoding support up to 4K",
        "Latest version built-in media codecs",
        "Automatic subtitle detection and playback",
        "Playlists and playback queues",
        "Network streaming support",
        "Customizable audio and video profiles",
      ],
    },
    {
      id: "video-formats",
      title: "Video Formats",
      content: {
        containers: ["MKV", "MP4", "AVI", "MOV", "WebM", "TS", "M2TS"],
        codecs: ["H.264/AVC", "H.265/HEVC", "VP9", "MPEG-2", "MPEG-4"],
        resolutions: [
          "Up to 4K (3840x2160)",
          "Full HD (1920x1080)",
          "HD (1280x720)",
        ],
        features: [
          "HDR10 Support",
          "Hardware Decoding",
          "Adaptive Bitrate",
          "Various Frame Rates",
        ],
      },
    },
    {
      id: "audio-formats",
      title: "Audio Formats",
      content: {
        formats: ["MP3", "FLAC", "WAV", "AAC", "OGG", "OPUS", "APE"],
        features: [
          "High-quality playback up to 24bit/192kHz",
          "Digital equalizer support",
          "Various playback modes",
          "Gapless playback for seamless reproduction",
        ],
        bluetooth: [
          "A2DP for high-quality wireless audio",
          "aptX and aptX HD codecs",
          "AAC for Apple devices",
          "Low latency audio transmission",
        ],
      },
    },
    {
      id: "system-improvements",
      title: "System Improvements",
      content: {
        performance: [
          "CPU and GPU usage optimization",
          "Improved memory management",
          "Reduced power consumption",
          "Faster system boot",
        ],
        stability: [
          "Fixed long-term usage issues",
          "Improved Bluetooth connection stability",
          "Optimized SD card handling",
          "Enhanced game save reliability",
        ],
        interface: [
          "Updated user interface",
          "New themes",
          "Improved menu navigation",
          "Hotkey support",
        ],
      },
    },
    {
      id: "downloads",
      title: "Available Downloads",
      content: null,
    },
    {
      id: "related",
      title: "You May Also Like",
      content: null,
    },
  ];

  const downloads = [
    {
      file: "R36S_tg5040_20240413_v1.0.4_hotfix6.7z",
      date: "2024.04.13",
      version: "v1.0.4",
    },
    {
      file: "R36S_tg5040_20231222_v1.0.3.7z",
      date: "2023.12.22",
      version: "v1.0.3",
    },
    {
      file: "R36S_tg5040_20231116_1539_v1.0.2.7z",
      date: "2023.11.16",
      version: "v1.0.2",
    },
    {
      file: "R36S_tg5040_20231105_v1.0.0.7z",
      date: "2023.11.05",
      version: "v1.0.0",
    },
  ];

  const relatedGuides = [
    {
      title: "R36S Smart Pro Firmware Guide",
      description: "Latest firmware (v1.0.4 - April 13, 2024)",
      code: "Major 023",
    },
    {
      title: "R36S S Model Firmware Guide",
      description: "Firmware update instructions",
      code: "038",
    },
    {
      title: "PARTNERSHIP WITH R36S",
      description: "COMPANY INFORMATION The R36S brand was",
      code: "0939",
    },
  ];

  const renderSectionContent = (section) => {
    switch (section.id) {
      case "latest-version":
        return (
          <div className="versionInfo">
            <div className="versionHeader">
              <h3>
                {section.content.version} ({section.content.date})
              </h3>
            </div>
            <p className="versionDescription">{section.content.description}</p>
            <div className="versionHighlights">
              {section.content.highlights.map((highlight, index) => (
                <div key={index} className="featureItem">
                  <span className="featureBullet">•</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "new-features":
      case "media-player":
        return (
          <div className="featureList">
            {section.content.map((feature, index) => (
              <div key={index} className="featureItem">
                <span className="featureBullet">•</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        );

      case "video-formats":
      case "audio-formats":
        return (
          <div className="formatInfo">
            {Object.entries(section.content).map(([key, value]) => (
              <div key={key} className="formatSection">
                <h4 className="formatTitle">
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </h4>
                {Array.isArray(value) ? (
                  <div className="formatList">
                    {value.map((item, index) => (
                      <div key={index} className="featureItem">
                        <span className="featureBullet">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>{value}</p>
                )}
              </div>
            ))}
          </div>
        );

      case "system-improvements":
        return (
          <div className="systemImprovements">
            {Object.entries(section.content).map(([key, improvements]) => (
              <div key={key} className="improvementCategory">
                <h4 className="categoryTitle">
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </h4>
                <div className="improvementList">
                  {improvements.map((improvement, index) => (
                    <div key={index} className="featureItem">
                      <span className="featureBullet">•</span>
                      <span>{improvement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="guide">
      <div className="guideBackground"></div>

      <div className="container">
        <div className="content">
          {/* Side Navigation */}
          <nav className="nav">
            <h2 className="navTitle">Contents</h2>
            <div className="navList">
              {sections.map(({ id, title }) => (
                <button
                  key={id}
                  className={`navItem ${
                    activeSection === id ? "navItemActive" : ""
                  }`}
                  onClick={() => handleSectionClick(id)}
                >
                  <ChevronRight className="navIcon" />
                  <span>{title}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Main Content */}
          <main className="main">
            <h1 className="title">R36S Console Firmware Guide</h1>

            {/* Dynamic Sections */}
            <div className="dynamicSections">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`section ${
                    activeSection === section.id ? "sectionActive" : ""
                  }`}
                >
                  <h2 className="sectionTitle">{section.title}</h2>
                  {renderSectionContent(section)}
                </section>
              ))}
            </div>

            {/* Downloads Section - Always Visible */}
            <section
              id="downloads"
              className="section staticSection"
              style={{ scrollMarginTop: "20px" }}
            >
              <h2 className="sectionTitle">Available Downloads</h2>
              <div className="downloadList">
                {downloads.map((item) => (
                  <div key={item.file} className="downloadCard">
                    <div className="downloadInfo">
                      <FileDown className="downloadIcon" />
                      <div>
                        <div className="downloadFilename">{item.file}</div>
                        <div className="downloadMeta">
                          Update: {item.date} • {item.version}
                        </div>
                      </div>
                    </div>
                    <button className="downloadButton">
                      <Download className="buttonIcon" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Guides - Always Visible */}
            <section
              id="related"
              className="section staticSection"
              style={{ scrollMarginTop: "20px" }}
            >
              <h2 className="sectionTitle">You May Also Like</h2>
              <div className="relatedGrid">
                {relatedGuides.map((guide) => (
                  <div key={guide.title} className="relatedCard">
                    <h3 className="relatedTitle">{guide.title}</h3>
                    <p className="relatedDesc">{guide.description}</p>
                    <span className="relatedCode">{guide.code}</span>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Products;
