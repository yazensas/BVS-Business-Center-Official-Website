import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var workspaces = [
	{
		number: "01",
		title: "Private offices",
		text: "Fully furnished, secure offices for focused teams and established businesses.",
		meta: "For 1–12 people",
		image: "/bvs-corridor.jpg"
	},
	{
		number: "02",
		title: "Meeting rooms",
		text: "Professional rooms for pitches, workshops, interviews and client conversations.",
		meta: "Book by the hour or day",
		image: "/bvs-meeting.jpg"
	},
	{
		number: "03",
		title: "Flexible desks",
		text: "A ready-to-use desk and a polished environment whenever business brings you in.",
		meta: "Flexible access",
		image: "/bvs-lounge.jpg"
	},
	{
		number: "04",
		title: "Virtual office",
		text: "Build a credible Dubai presence with a professional business address and support.",
		meta: "Work from anywhere",
		image: "/bvs-sign.jpg"
	}
];
var faqs = [
	{
		q: "Can I view the offices before deciding?",
		a: "Yes. Call our team to arrange a viewing and we’ll show you the available spaces that best suit your team size and working style."
	},
	{
		q: "Are the offices furnished?",
		a: "Our workspace options are designed to be move-in ready. Final furniture, access and service details can be confirmed with the team during your viewing."
	},
	{
		q: "Do you offer short and long-term options?",
		a: "BVS is built around flexibility. Tell us how long you need the space and we’ll explain the currently available contract options."
	},
	{
		q: "Where is BVS Business Center located?",
		a: "We are in Barsha Valley Building, Al Barsha 1, Dubai—conveniently positioned for teams, clients and everyday business needs."
	}
];
function Brand({ inverse = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		className: `brand ${inverse ? "brand-inverse" : ""}`,
		href: "#top",
		"aria-label": "BVS Business Center home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "brand-mark",
			children: "BVS"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "brand-name",
			children: [
				"Business",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"Center"
			]
		})]
	});
}
function Home() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	function handleSubmit(event) {
		event.preventDefault();
		setSubmitted(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "announcement",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Private offices and flexible workspace in Al Barsha 1, Dubai" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "tel:+97144478808",
					children: ["Talk to our team ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+971 4 447 8808" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "site-header",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, { inverse: true }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "desktop-nav",
						"aria-label": "Main navigation",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#workspaces",
								children: "Workspaces"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#experience",
								children: "Why BVS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#location",
								children: "Location"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#faq",
								children: "FAQs"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "header-cta",
						href: "#enquire",
						children: ["Book a viewing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "menu-button",
						onClick: () => setMenuOpen(!menuOpen),
						"aria-expanded": menuOpen,
						"aria-label": "Toggle navigation",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
					}),
					menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mobile-nav",
						"aria-label": "Mobile navigation",
						children: [
							["Workspaces", "#workspaces"],
							["Why BVS", "#experience"],
							["Location", "#location"],
							["FAQs", "#faq"],
							["Book a viewing", "#enquire"]
						].map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href,
							onClick: () => setMenuOpen(false),
							children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })]
						}, href))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hero",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Al Barsha · Dubai"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
							"Space to do",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "serious business." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-intro",
							children: "Private offices and flexible business solutions for teams who want a polished Dubai presence—without the usual friction."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "button button-light",
								href: "#workspaces",
								children: ["Explore our spaces ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↓" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "text-link",
								href: "tel:+97144478808",
								children: ["Call +971 4 447 8808 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-image",
					role: "img",
					"aria-label": "Contemporary executive office with warm natural light",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-image-footer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Professional spaces.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Ready when you are."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"25.1133° N",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"55.2009° E"
						] })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "trust-strip",
				"aria-label": "Workspace benefits",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Everything your business needs, under one roof." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Move-in ready" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Flexible terms" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Professional support" })] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "workspaces section-pad",
				id: "workspaces",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Find your space"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"Built around",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "the way you work." })
					] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From your first Dubai address to a private base for a growing team, choose the space you need today—with room to evolve tomorrow." })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "workspace-grid",
					children: workspaces.map((space) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "workspace-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "workspace-image",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: space.image,
								alt: ""
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: space.number })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "workspace-content",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: space.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: space.text }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: space.meta }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#enquire",
									"aria-label": `Enquire about ${space.title}`,
									children: ["Enquire ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "↗" })]
								})] })
							]
						})]
					}, space.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "experience",
				id: "experience",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "experience-visual",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "experience-photo",
						role: "img",
						"aria-label": "Elegant shared business lounge"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "photo-index",
						children: "BVS / 01"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "experience-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "The BVS experience"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "A workspace that reflects your ambition." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "experience-lead",
							children: "Every detail is designed to help you arrive, settle in and focus on the work that matters."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "feature-list",
							children: [
								["A professional first impression", "Welcome clients into a considered business environment that feels established from day one."],
								["Simple, flexible arrangements", "Choose the right space and commitment without the burden of a traditional office setup."],
								["Support close at hand", "A responsive on-site team helps keep your working day moving smoothly."]
							].map(([title, text], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", index + 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })] })] }, title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "dark-link",
							href: "#enquire",
							children: ["Arrange a private viewing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "included section-pad",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "included-intro",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Designed for the workday"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"More than",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"four walls."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The practical essentials are already considered, so your team can focus on business rather than office administration." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "included-list",
					children: [
						["Furnished workspaces", "A professional setting ready for your team."],
						["High-speed connectivity", "Reliable access for calls, meetings and daily work."],
						["Meeting room access", "A polished setting when conversations matter."],
						["Reception support", "A welcoming first point of contact for visitors."],
						["Printing and scanning", "Everyday business tools within easy reach."],
						["Comfortable common areas", "Space to pause, connect or work informally."]
					].map(([title, text], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "included-item",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "＋" })
						]
					}, title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "location",
				id: "location",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "location-map",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "map-grid" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "map-road road-one",
							children: "Sheikh Zayed Road"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "map-road road-two",
							children: "Umm Suqeim Street"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "map-pin",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BVS" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "map-label label-one",
							children: "Al Barsha 1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "map-label label-two",
							children: "Mall of the Emirates"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "map-label label-three",
							children: "Dubai Internet City"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "location-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Connected by location"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"Business,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"well positioned."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Meet clients and work from a central Al Barsha address with easy access to Dubai’s major commercial districts." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", { children: [
							"Offices 203–208, 2nd Floor",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Barsha Valley Building",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Al Barsha 1, Dubai, UAE"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://maps.google.com/?q=Barsha+Valley+Building+Al+Barsha+1+Dubai",
							target: "_blank",
							rel: "noreferrer",
							children: ["Open in Google Maps ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "steps section-pad",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading compact-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "A simple next step"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"Your new office,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "without the runaround." })
					] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Start with a conversation. We’ll help narrow down the options and arrange a visit around your schedule." })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "step-grid",
					children: [
						["Tell us what you need", "Share your team size, preferred setup and expected move-in date."],
						["Visit your best options", "Tour the available spaces and get a feel for the BVS environment."],
						["Choose and move in", "Confirm the details, bring your team and get down to business."]
					].map(([title, text], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "step",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", index + 1] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text }),
							index < 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "→" })
						]
					}, title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "faq section-pad",
				id: "faq",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "faq-intro",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Good to know"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"Questions,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "answered." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Need something specific? Speak directly with the BVS team on ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+97144478808",
								children: "+971 4 447 8808"
							}),
							"."
						] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "faq-list",
					children: faqs.map((faq, index) => {
						const isOpen = openFaq === index;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `faq-item ${isOpen ? "open" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpenFaq(isOpen ? null : index),
								"aria-expanded": isOpen,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", index + 1] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: faq.q }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: isOpen ? "−" : "+" })
								]
							}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: faq.a })]
						}, faq.q);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "enquire",
				id: "enquire",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "enquire-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Start a conversation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"Find your place",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"at BVS."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tell us what you’re looking for and the team can help you find the right workspace." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "enquire-details",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Prefer to call?" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+97144478808",
									children: "+971 4 447 8808"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Visit us" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Barsha Valley Building, Al Barsha 1" })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
					className: "enquiry-form",
					onSubmit: handleSubmit,
					children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "form-success",
						role: "status",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Design preview" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "The enquiry layout is ready." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This form is not connected yet, so no information was sent. It can be wired to your preferred email or CRM later." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSubmitted(false),
								children: "Return to form"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "form-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Full name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "name",
								type: "text",
								placeholder: "Your name",
								required: true
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Phone number", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "phone",
								type: "tel",
								placeholder: "+971",
								required: true
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "form-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Work email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "email",
								type: "email",
								placeholder: "name@company.com",
								required: true
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Team size", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "teamSize",
								defaultValue: "",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										disabled: true,
										children: "Select"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Just me" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "2–5 people" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "6–12 people" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "13+ people" })
								]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["What are you looking for?", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "workspace",
							defaultValue: "",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Select a workspace"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Private office" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Meeting room" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Flexible desk" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Virtual office" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Not sure yet" })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Anything else?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							placeholder: "Move-in date, preferred setup or questions",
							rows: 4
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "submit-button",
							type: "submit",
							children: ["Request a viewing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Design preview only—this form is not connected and will not send your information." })
					] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-top",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, { inverse: true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Professional workspace for modern business in the heart of Al Barsha." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							children: "Back to top ↑"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-grid",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#workspaces",
								children: "Workspaces"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#experience",
								children: "Why BVS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#location",
								children: "Location"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#faq",
								children: "FAQs"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Workspaces" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#workspaces",
								children: "Private offices"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#workspaces",
								children: "Meeting rooms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#workspaces",
								children: "Flexible desks"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#workspaces",
								children: "Virtual office"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contact" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+97144478808",
								children: "+971 4 447 8808"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Offices 203–208, 2nd Floor",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Barsha Valley Building",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Al Barsha 1, Dubai"
							] })
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-bottom",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 BVS Business Center" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Custom website design preview" })]
				})
			] })
		]
	});
}
//#endregion
export { Home as default };
