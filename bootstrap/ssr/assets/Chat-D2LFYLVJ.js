import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CpbTzD9X.js";
import { T as TextArea } from "./TextArea-DGWF_tBU.js";
import { usePage, useForm, Head, Link, router } from "@inertiajs/react";
import { Search01Icon, Message01Icon, ArrowLeft01Icon, SmileIcon, Image01Icon, ArrowRight01Icon } from "@hugeicons/react";
import { useDropzone } from "react-dropzone";
import { G as GoBack } from "./GoBack-DouR9b2L.js";
import EmojiPicker from "emoji-picker-react";
import "./ApplicationLogo-BiY3mFu2.js";
import "./Dropdown-BfUgSuEe.js";
import "@headlessui/react";
import "./Grid-pbLu9vEv.js";
import "./Footer-TPpfWWn9.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-toast";
const FromMessage$1 = ({ name, message, time, dp }) => {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-[80%] flex space-x-4", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-gray-300 rounded-full w-12 h-12 flex-shrink-0 inline-block border border-gray-200 ",
        children: dp && /* @__PURE__ */ jsx(
          "img",
          {
            src: dp,
            className: "rounded-full object-center object-cover",
            alt: ""
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm", children: name }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-bpurple-50 text-bpurple-600 p-4 rounded-xl rounded-tl-none",
          children: message
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end text-xs text-gray-400 my-1", children: time })
    ] })
  ] });
};
const FromMessage = ({ message, time }) => {
  return /* @__PURE__ */ jsx("div", { className: "ml-auto max-w-[80%] flex flex-row-reverse space-x-4", children: /* @__PURE__ */ jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-bpurple-500 text-white p-4 rounded-xl rounded-tr-none ",
        children: message
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "flex justify-end flex-row-reverse text-xs text-gray-400 my-1",
        children: time
      }
    )
  ] }) });
};
const Chat = ({ users, me, messages, partner }) => {
  var _a, _b;
  usePage().props;
  useForm();
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("msg");
  const [chatMessages, setChatMessages] = useState(messages);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const messagesEndRef = useRef(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmojiKeyboard, setShowEmojiKeyboard] = useState(false);
  useEffect(() => {
    if (partner.profile === null) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  }, [partner]);
  const onEmojiClick = (emojiData) => {
    setChosenEmoji(emojiData);
    setShowEmojiKeyboard(false);
    setMessage((prev) => prev + emojiData.emoji);
  };
  const onDrop = (acceptedFiles) => {
    const filePreviews = acceptedFiles.map(
      (file) => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    );
    setFiles(filePreviews);
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    // Only allow images
    multiple: true
    // Allow multiple files
  });
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
    Echo.channel(`chat`).listen("MessageSentEvent", (e) => {
      const new_message = e.message;
      if (new_message.from_user_id === partner.id && new_message.to_user_id === me.id) {
        console.log(new_message, me.id, partner.id);
        setChatMessages([]);
        const updated_messages = [...chatMessages, new_message];
        setChatMessages(updated_messages);
      }
    });
  }, [chatMessages]);
  const sendMessage = () => {
    setChatMessages([...chatMessages, message]);
    const time = /* @__PURE__ */ new Date();
    const newMessage = {
      from_user_id: me.id,
      message_type: messageType,
      to_user_id: partner.id,
      message,
      human_time: time.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
    };
    router.post(route("send-message"), newMessage, {
      preserveScroll: true,
      onSuccess: () => {
        setChatMessages([]);
        const updated_messages = [...chatMessages, newMessage];
        setChatMessages(updated_messages);
        setMessage("");
      }
    });
  };
  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      sendMessage();
    }
  };
  return /* @__PURE__ */ jsxs(AuthenticatedLayout, { children: [
    /* @__PURE__ */ jsx(
      Head,
      {
        title: ((_a = partner == null ? void 0 : partner.name) == null ? void 0 : _a.length) > 0 ? `${partner.name} Chat ` : "Chat"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto my-8 px-8", children: /* @__PURE__ */ jsx(GoBack, {}) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto my-8 grid max-w-6xl items-start gap-4 px-4 lg:-mt-0 lg:grid-cols-3 lg:px-0", children: [
      /* @__PURE__ */ jsxs("div", { className: showSidebar ? "" : "hidden lg:block", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl text-bpurple-500", children: "Chat" }),
          /* @__PURE__ */ jsx("div", { className: "flex size-8 items-center justify-center rounded-full border border-gray-400", children: /* @__PURE__ */ jsx(Search01Icon, { size: 16 }) })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "h-[calc(80vh-20px)] space-y-4 divide-y divide-gray-200 overflow-y-auto pr-4", children: [
          users.map((user) => {
            var _a2, _b2, _c;
            return /* @__PURE__ */ jsx("li", { className: "", children: /* @__PURE__ */ jsxs(
              Link,
              {
                className: "flex items-center justify-between pt-4",
                href: route("chat", user),
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "border-gray size-14 overflow-hidden rounded-full border bg-gray-300", children: ((_a2 = user == null ? void 0 : user.profile) == null ? void 0 : _a2.dp) && /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: user.profile.dp,
                        className: "rounded-full object-cover object-center",
                        alt: ""
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                      /* @__PURE__ */ jsx("span", { className: "capitalize text-bpurple-500", children: user.name }),
                      ((_b2 = user == null ? void 0 : user.sent_messages[0]) == null ? void 0 : _b2.message) ? /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: user.sent_messages[0].message }) : /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "Start Chat" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { children: ((_c = user == null ? void 0 : user.sent_messages[0]) == null ? void 0 : _c.human_time) ? /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-600", children: user.sent_messages[0].human_time }) : "" })
                ]
              }
            ) }, user.id);
          }),
          users.length < 10 && /* @__PURE__ */ jsx("li", { className: "bg-gray-100 p-4 text-gray-500", children: "Note: More people will be available to chat once you and they like each other." })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "col-span-2 h-full " + (showSidebar ? "hidden lg:block" : ""),
          children: (partner == null ? void 0 : partner.profile) === null ? /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center bg-gray-100 p-4 text-gray-500", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center space-y-2 text-2xl", children: [
            /* @__PURE__ */ jsx(Message01Icon, { size: 48 }),
            /* @__PURE__ */ jsx("h3", { children: "Start a Chat" }),
            /* @__PURE__ */ jsx("p", { className: "text-base", children: "Click on the person name in sidebar to begin your chat." })
          ] }) }) : /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col justify-between rounded-xl border border-bpurple-400", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded-t-xl bg-bpurple-500", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 p-4", children: [
                /* @__PURE__ */ jsx("div", { className: "size-14 overflow-hidden rounded-full bg-gray-300", children: ((_b = partner == null ? void 0 : partner.profile) == null ? void 0 : _b.dp) && /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: partner.profile.dp,
                    className: "rounded-full object-cover object-center",
                    alt: ""
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx("span", { className: "capitalize text-white", children: partner.name }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "p-4 text-white", children: /* @__PURE__ */ jsx(
                "span",
                {
                  className: "flex size-8 items-center justify-center rounded-full border",
                  onClick: () => setShowSidebar(true),
                  children: /* @__PURE__ */ jsx(ArrowLeft01Icon, {})
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "overflow-y-auto",
                ref: messagesEndRef,
                children: /* @__PURE__ */ jsx("div", { className: "w-full p-4", children: /* @__PURE__ */ jsx("ul", { className: "flex h-[calc(65vh-20px)] w-full flex-col", children: chatMessages.map((message2, index) => {
                  var _a2;
                  return /* @__PURE__ */ jsxs("li", { children: [
                    message2.from_user_id === partner.id && /* @__PURE__ */ jsx(
                      FromMessage$1,
                      {
                        dp: (_a2 = partner == null ? void 0 : partner.profile) == null ? void 0 : _a2.dp,
                        name: partner.name,
                        message: message2.message,
                        time: message2.human_time
                      }
                    ),
                    message2.from_user_id === me.id && /* @__PURE__ */ jsx(
                      FromMessage,
                      {
                        message: message2.message,
                        time: message2.human_time
                      }
                    )
                  ] }, index);
                }) }) })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "p-4", children: files.map((file, index) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "size-24 bg-gray-200",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: file.preview,
                    alt: file.name,
                    className: "h-full w-full rounded-lg object-cover"
                  }
                )
              },
              index
            )) }),
            /* @__PURE__ */ jsx("div", { className: "rounded-b-xl border-t border-gray-400 bg-bpurple-50 px-4 py-1", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-x-4", children: [
              showFileUpload ? /* @__PURE__ */ jsxs(
                "div",
                {
                  ...getRootProps(),
                  className: "mb-4 border-2 border-dashed p-4 text-center align-middle",
                  children: [
                    /* @__PURE__ */ jsx("input", { ...getInputProps() }),
                    /* @__PURE__ */ jsx("p", { children: "Drag & Drop images here, or click to select files" })
                  ]
                }
              ) : /* @__PURE__ */ jsxs("div", { className: "relative flex items-center w-full", children: [
                showEmojiKeyboard ? /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute bottom-0 left-0 flex items-center justify-center bg-gray-100",
                    children: /* @__PURE__ */ jsx(
                      EmojiPicker,
                      {
                        onEmojiClick
                      }
                    )
                  }
                ) : /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  SmileIcon,
                  {
                    onClick: () => {
                      setShowEmojiKeyboard(true);
                    }
                  }
                ) }),
                /* @__PURE__ */ jsx(
                  TextArea,
                  {
                    className: "flex-grow rounded-none border-none bg-transparent w-full flex-1 py-1 text-xl shadow-none focus:outline-none focus:ring-0",
                    onKeyDown: (e) => onEnterPress(e),
                    rows: 2,
                    value: message,
                    placeholder: "Reply...",
                    onChange: (e) => setMessage(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "text-gray-400",
                    onClick: () => showFileUpload ? setShowFileUpload(false) : setShowFileUpload(true),
                    children: /* @__PURE__ */ jsx(Image01Icon, { size: 24 })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    disabled: !(message !== "" || files.length !== 0),
                    className: "flex size-8 items-center justify-center rounded-full bg-bpurple-500 text-white disabled:bg-gray-300",
                    onClick: () => sendMessage(),
                    children: /* @__PURE__ */ jsx(ArrowRight01Icon, {})
                  }
                )
              ] })
            ] }) })
          ] })
        }
      )
    ] })
  ] });
};
export {
  Chat as default
};
