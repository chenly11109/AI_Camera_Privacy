const UPDATED_DATE = "2026-06-18";
const CONTACT_EMAIL = "privacy@example.com";

const content = {
  zh: {
    htmlLang: "zh-CN",
    eyebrow: "AI Camera",
    title: "隐私政策与服务条款",
    intro:
      "本页面说明 AI Camera 如何处理账号、相机、相册、生成内容、积分购买和反馈相关信息，并列出使用本服务时需要遵守的基本条款。",
    summaryTitle: "文档信息",
    updatedLabel: "更新日期",
    updatedValue: UPDATED_DATE,
    contactLabel: "联系邮箱",
    operatorLabel: "服务主体",
    sections: [
      {
        id: "overview",
        title: "1. 适用范围",
        paragraphs: [
          "本隐私政策与服务条款适用于 AI Camera 移动应用及其配套服务。使用或注册 AI Camera 即表示你已阅读并同意本页面内容。",
          "AI Camera 当前项目配置面向美国区 Firebase 服务，同时项目中也保留 Tencent CloudBase 后端实现。实际数据处理会依据你使用的版本和地区配置执行。"
        ]
      },
      {
        id: "data",
        title: "2. 我们处理的数据",
        bullets: [
          "账号资料：邮箱、昵称、头像、登录状态、用户 ID、账号创建与更新记录。",
          "相机和相册素材：你主动拍摄、选择、上传或保存的照片、视频、头像和角色参考图。",
          "AI 生成内容：生成任务参数、模板选择、输入图片或视频、生成结果、任务状态、缓存和历史记录。",
          "积分与购买信息：积分余额、扣费和退款记录、Apple 应用内购买凭证相关的交易信息。",
          "反馈与支持信息：你提交的问题类型、文字说明、关联任务信息和必要的诊断上下文。",
          "基础技术信息：设备、应用版本、网络请求状态、错误日志和安全验证所需的最少信息。"
        ]
      },
      {
        id: "use",
        title: "3. 数据使用目的",
        bullets: [
          "创建和维护账号，识别登录状态，并保护账号安全。",
          "提供相机、头像、角色、图片生成、视频生成、结果预览、保存和分享等核心功能。",
          "计算积分消耗、处理充值或购买、发放权益并处理异常退款。",
          "排查故障、改进模板和生成体验、处理用户反馈与支持请求。",
          "防止欺诈、滥用、未经授权访问以及违反本条款的行为。"
        ]
      },
      {
        id: "storage",
        title: "4. 存储、第三方服务与共享",
        paragraphs: [
          "我们会使用 Firebase、Cloud Storage、Cloud Functions、Firestore、Apple StoreKit，以及在中国区版本可能使用的 Tencent CloudBase 等服务来完成账号、存储、任务处理、购买验证和运营管理。",
          "我们不会出售你的个人信息，也不会将你的数据用于跨 App 广告跟踪。只有在提供服务、处理支付、遵守法律、保护用户和服务安全，或获得你授权时，才会与必要的服务提供方共享有限信息。"
        ]
      },
      {
        id: "rights",
        title: "5. 你的选择与权利",
        bullets: [
          "你可以选择不上传特定照片、视频或头像；但相关功能可能无法使用。",
          "你可以在系统设置中管理相机、相册和通知等权限。",
          "你可以删除本地生成历史或在 App 内提交反馈，请求访问、更正或删除与你账号相关的信息。",
          `如需隐私协助，请通过邮箱 ${CONTACT_EMAIL} 联系我们。该邮箱为上线前占位，需要正式发布前替换。`
        ]
      },
      {
        id: "ai",
        title: "6. AI 生成内容说明",
        paragraphs: [
          "AI Camera 使用你选择的素材、模板和参数生成图片或视频。生成结果可能不准确、不完整或与你预期不同。",
          "你应确保上传和生成的内容不侵犯他人权利，不包含违法、骚扰、仇恨、色情、暴力、欺诈或其他不当内容。你需要对自己上传、生成、保存和分享的内容负责。"
        ]
      },
      {
        id: "payments",
        title: "7. 积分、会员与购买",
        paragraphs: [
          "部分功能会消耗积分，积分价格、消耗数量、赠送规则、会员权益或燃料包可能随版本和活动变化。购买由 Apple 应用内购买或对应地区的支付渠道处理。",
          "除适用法律或平台规则另有要求外，已消耗的积分和已完成的数字服务通常不可退还。如生成失败或服务异常，我们可能依据系统记录进行补偿或退款处理。"
        ]
      },
      {
        id: "changes",
        title: "8. 服务变更与条款更新",
        paragraphs: [
          "我们可能会调整功能、模板、价格、积分规则、后端服务或本页面内容。重大更新会通过 App、页面更新日期或其他合理方式提示。",
          "如你在更新后继续使用 AI Camera，即表示你接受更新后的隐私政策与服务条款。"
        ]
      },
      {
        id: "disclaimer",
        title: "9. 免责声明与责任限制",
        paragraphs: [
          "AI Camera 按现状提供服务。我们会努力保持服务稳定和安全，但不保证生成结果始终可用、准确、无错误或适合特定目的。",
          "在法律允许范围内，我们不对因网络、第三方服务、设备环境、用户内容或不可抗力导致的损失承担超出适用法律要求的责任。"
        ],
        notice:
          "本页面为产品合规草案，不构成法律意见。正式上线前请替换联系邮箱并由法律或隐私负责人复核。"
      }
    ]
  },
  en: {
    htmlLang: "en",
    eyebrow: "AI Camera",
    title: "Privacy Policy and Terms of Service",
    intro:
      "This page explains how AI Camera handles account, camera, photo library, generated content, credits, purchases, and feedback information, and sets out the basic terms for using the service.",
    summaryTitle: "Document Details",
    updatedLabel: "Last updated",
    updatedValue: UPDATED_DATE,
    contactLabel: "Contact email",
    operatorLabel: "Service operator",
    sections: [
      {
        id: "overview",
        title: "1. Scope",
        paragraphs: [
          "This Privacy Policy and Terms of Service apply to the AI Camera mobile app and related services. By using or registering for AI Camera, you acknowledge that you have read and agree to this page.",
          "The current AI Camera project configuration targets the United States region with Firebase services, and the project also keeps a Tencent CloudBase backend implementation. Actual processing depends on the version and regional configuration you use."
        ]
      },
      {
        id: "data",
        title: "2. Data We Process",
        bullets: [
          "Account information: email address, display name, avatar, sign-in state, user ID, and account creation or update records.",
          "Camera and photo library materials: photos, videos, avatars, and character reference images that you capture, select, upload, or save.",
          "AI-generated content: generation task parameters, template selections, input images or videos, generated results, task status, cache, and history.",
          "Credits and purchase information: credit balance, charge and refund records, and transaction information related to Apple in-app purchase receipts.",
          "Feedback and support information: issue type, written description, related task information, and necessary diagnostic context.",
          "Basic technical information: device, app version, request status, error logs, and the minimum information needed for security verification."
        ]
      },
      {
        id: "use",
        title: "3. How We Use Data",
        bullets: [
          "Create and maintain accounts, recognize sign-in state, and protect account security.",
          "Provide core features such as camera capture, avatars, characters, image generation, video generation, result previews, saving, and sharing.",
          "Calculate credit usage, process top-ups or purchases, deliver benefits, and handle abnormal refunds.",
          "Troubleshoot issues, improve templates and generation experiences, and respond to feedback or support requests.",
          "Prevent fraud, abuse, unauthorized access, and violations of these terms."
        ]
      },
      {
        id: "storage",
        title: "4. Storage, Third-Party Services, and Sharing",
        paragraphs: [
          "We use services such as Firebase, Cloud Storage, Cloud Functions, Firestore, Apple StoreKit, and, for China-region versions, Tencent CloudBase where applicable, to support accounts, storage, task processing, purchase validation, and operations.",
          "We do not sell your personal information or use your data for cross-app advertising tracking. We share limited information with necessary service providers only to provide the service, process payments, comply with law, protect users and the service, or with your authorization."
        ]
      },
      {
        id: "rights",
        title: "5. Your Choices and Rights",
        bullets: [
          "You may choose not to upload specific photos, videos, or avatars, but related features may not work.",
          "You can manage permissions such as camera, photo library, and notifications in system settings.",
          "You can delete local generation history or submit feedback in the app to request access, correction, or deletion of information associated with your account.",
          `For privacy help, contact us at ${CONTACT_EMAIL}. This email is a pre-launch placeholder and must be replaced before public release.`
        ]
      },
      {
        id: "ai",
        title: "6. AI-Generated Content",
        paragraphs: [
          "AI Camera uses the materials, templates, and parameters you select to generate images or videos. Generated results may be inaccurate, incomplete, or different from what you expected.",
          "You must ensure that uploaded and generated content does not infringe others' rights and does not include illegal, harassing, hateful, sexual, violent, fraudulent, or otherwise inappropriate content. You are responsible for the content you upload, generate, save, and share."
        ]
      },
      {
        id: "payments",
        title: "7. Credits, Memberships, and Purchases",
        paragraphs: [
          "Some features consume credits. Credit prices, usage amounts, bonus rules, membership benefits, or fuel packs may change by version or promotion. Purchases are processed through Apple in-app purchases or the applicable payment channel for your region.",
          "Except where required by applicable law or platform rules, consumed credits and completed digital services are generally non-refundable. If generation fails or a service error occurs, we may provide compensation or refunds based on system records."
        ]
      },
      {
        id: "changes",
        title: "8. Service Changes and Updates",
        paragraphs: [
          "We may adjust features, templates, prices, credit rules, backend services, or this page. Material updates will be communicated through the app, the updated date on this page, or other reasonable means.",
          "If you continue using AI Camera after an update, you accept the updated Privacy Policy and Terms of Service."
        ]
      },
      {
        id: "disclaimer",
        title: "9. Disclaimer and Limitation of Liability",
        paragraphs: [
          "AI Camera is provided as is. We work to keep the service stable and secure, but we do not guarantee that generated results will always be available, accurate, error-free, or fit for a particular purpose.",
          "To the extent permitted by law, we are not responsible for losses caused by network conditions, third-party services, device environments, user content, or events beyond reasonable control beyond what applicable law requires."
        ],
        notice:
          "This page is a product compliance draft and is not legal advice. Replace the contact email and have it reviewed by a legal or privacy owner before public release."
      }
    ]
  }
};

const i18nTargets = document.querySelectorAll("[data-i18n]");
const languageButtons = document.querySelectorAll("[data-language]");
const contentNode = document.querySelector("#content");
const tocNode = document.querySelector("#toc");

function preferredLanguage() {
  const stored = window.localStorage.getItem("ai-camera-privacy-language");
  return stored === "en" || stored === "zh" ? stored : "zh";
}

function setText(language) {
  const strings = content[language];
  document.documentElement.lang = strings.htmlLang;

  i18nTargets.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = strings[key] || "";
  });

  languageButtons.forEach((button) => {
    const isActive = button.getAttribute("data-language") === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderToc(strings.sections);
  renderContent(strings.sections);
}

function renderToc(sections) {
  tocNode.innerHTML = "";
  sections.forEach((section) => {
    const link = document.createElement("a");
    link.href = `#${section.id}`;
    link.textContent = section.title;
    tocNode.appendChild(link);
  });
}

function renderContent(sections) {
  contentNode.innerHTML = "";
  sections.forEach((section) => {
    const sectionNode = document.createElement("section");
    sectionNode.id = section.id;

    const title = document.createElement("h2");
    title.textContent = section.title;
    sectionNode.appendChild(title);

    if (section.paragraphs) {
      section.paragraphs.forEach((text) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        sectionNode.appendChild(paragraph);
      });
    }

    if (section.bullets) {
      const list = document.createElement("ul");
      section.bullets.forEach((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        list.appendChild(item);
      });
      sectionNode.appendChild(list);
    }

    if (section.notice) {
      const notice = document.createElement("p");
      notice.className = "notice";
      notice.textContent = section.notice;
      sectionNode.appendChild(notice);
    }

    contentNode.appendChild(sectionNode);
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.getAttribute("data-language");
    window.localStorage.setItem("ai-camera-privacy-language", language);
    setText(language);
  });
});

setText(preferredLanguage());
