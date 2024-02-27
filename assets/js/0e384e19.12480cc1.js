"use strict";(self.webpackChunknoora_llm_mse=self.webpackChunknoora_llm_mse||[]).push([[3976],{1512:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=s(4848),i=s(8453);const a={sidebar_position:1},r="Start Here",o={id:"intro",title:"Start Here",description:"This is a free, open source project by Noora Health. This has two main components: an intent-recognition system  and an assistant platform for the medical support executives to provide health information to the patients/caregivers.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/mse-assistant-docs/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Objective",permalink:"/mse-assistant-docs/docs/category/objective"}},l={},d=[{value:"What do we do?",id:"what-do-we-do",level:3},{value:"Key Features",id:"key-features",level:3},{value:"Vision",id:"vision",level:2},{value:"Enhanced Query Processing",id:"enhanced-query-processing",level:3},{value:"Retrieving Medical Answers",id:"retrieving-medical-answers",level:3},{value:"Feedback Mechanisms",id:"feedback-mechanisms",level:3},{value:"Logging System",id:"logging-system",level:3}];function c(e){const n={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"start-here",children:"Start Here"}),"\n",(0,t.jsx)(n.p,{children:"This is a free, open source project by Noora Health. This has two main components: an intent-recognition system  and an assistant platform for the medical support executives to provide health information to the patients/caregivers."}),"\n",(0,t.jsx)(n.h3,{id:"what-do-we-do",children:"What do we do?"}),"\n",(0,t.jsx)(n.p,{children:"RES is a mobile-based messaging service for patients and caregivers that empowers them towards healthy behaviors through in-time reminders and personalized support. RES is delivered through WhatsApp (scheduled messages, chatbot, and live chat), Voice (IVRS), or Teletrainers (live calls). We encourage patients and caregivers to ask us questions through these modalities and have a team of nurses and doctors to support this two-way communication platform."}),"\n",(0,t.jsx)(n.h3,{id:"key-features",children:"Key Features"}),"\n",(0,t.jsx)(n.p,{children:"Snapshot of RES on WhatsApp\nLive support: Patients and caregivers can engage and ask specific\nquestions on WhatsApp 7am-9pm, 6 days a wee\xa3"}),"\n",(0,t.jsx)(n.p,{children:"Rich media: Messages include engaging text, visual aids, and short-\nform videos to improve information retention through behavior change communication method\xa9"}),"\n",(0,t.jsx)(n.p,{children:"Health topics: Messages include high-impact behaviors. (Including healthy practices and appropriate healthcare seeking that are customized to a user\u2019s condition, stage, and need.)"}),"\n",(0,t.jsx)(n.p,{children:"Universal usage: All users irrespective of the technology they use (smartphone or basic phone) can access RES in their language and modality of preference"}),"\n",(0,t.jsx)(n.h2,{id:"vision",children:"Vision"}),"\n",(0,t.jsx)(n.p,{children:"(To be filled)"}),"\n",(0,t.jsx)(n.h3,{id:"enhanced-query-processing",children:"Enhanced Query Processing"}),"\n",(0,t.jsx)(n.p,{children:"The goal is to develop a workflow that leverages a Large Language Model (LLM) to translate queries into English and accurately extract medical information from sources like medpalm2 or a validated medical question bank. The workflow entails:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Generating an embedding from the cleaned Frequently Asked Questions (FAQ) database."}),"\n",(0,t.jsx)(n.li,{children:"Translating the user's query into English by:"}),"\n",(0,t.jsx)(n.li,{children:"Detecting the query's original language and noting it as language."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If the query isn't in English, translating the message to English; otherwise, proceeding with the message as is."}),"\n",(0,t.jsx)(n.h3,{id:"retrieving-medical-answers",children:"Retrieving Medical Answers"}),"\n",(0,t.jsx)(n.p,{children:'-Utilizing RAG (Retrieval-Augmented Generation) to derive a generated answer, displaying the top three retrievals based on the translated query. Should there be no relevant answer, the system will indicate "out of context."'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Employing Medpalm2 to secure a precise answer to the medical query, then translating this answer back into the initially recorded language for user comprehension."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Translate the answer to the saved language field and output the answer."}),"\n",(0,t.jsx)(n.p,{children:"Priority Medium:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If a message\u2019s input and output language is given:"}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Translate with AI 4 bharat\u2019s transliteration and translation apis."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"feedback-mechanisms",children:"Feedback Mechanisms"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Interface: Introduce a feedback interface post-answer with thumbs up (\ud83d\udc4d) or thumbs down (\ud83d\udc4e) icons and an optional text box for comments."}),"\n",(0,t.jsx)(n.li,{children:"Process: Collect and store feedback alongside the user's query, its translation, and the response for performance analysis and improvements."}),"\n",(0,t.jsx)(n.li,{children:"Implement a feature allowing users to specify their expected answer in a text box when no response is generated or if the provided answer is incorrect."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"logging-system",children:"Logging System"}),"\n",(0,t.jsx)(n.p,{children:"Query Logging: Record the original query, its detected language, and the translated English query. If a response is translated back, log both versions."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Retrieval and Response: Log the retrieval process details, source selection rationale, and the provided answer."}),"\n",(0,t.jsx)(n.li,{children:"Feedback: Document the user's feedback (rating and comments) linked to the query and response."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(6540);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);