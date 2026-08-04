import { useEffect, useRef, useState, useCallback } from 'react';
import { Section, SectionHeader } from '../layout';
import { skills, skillCategories } from '../../data';
import gsap from 'gsap';

// SVG Icons for skills
const SkillIcons = {
  react: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
      <path d="M12 21.35c-1.175 0-2.255-.106-3.215-.305-.96-.2-1.815-.497-2.545-.88-.73-.385-1.32-.84-1.775-1.36-.455-.52-.77-1.1-.955-1.735-.185-.635-.185-1.305 0-1.94.185-.635.5-1.215.955-1.735.455-.52 1.045-.975 1.775-1.36.73-.385 1.585-.68 2.545-.88.96-.2 2.04-.305 3.215-.305s2.255.105 3.215.305c.96.2 1.815.495 2.545.88.73.385 1.32.84 1.775 1.36.455.52.77 1.1.955 1.735.185.635.185 1.305 0 1.94-.185.635-.5 1.215-.955 1.735-.455.52-1.045.975-1.775 1.36-.73.383-1.585.68-2.545.88-.96.199-2.04.305-3.215.305Zm0-1.5c2.15 0 3.94-.315 5.225-.875 1.285-.56 1.925-1.255 1.925-2.025s-.64-1.465-1.925-2.025C15.94 14.315 14.15 14 12 14s-3.94.315-5.225.875c-1.285.56-1.925 1.255-1.925 2.025s.64 1.465 1.925 2.025c1.285.56 3.075.875 5.225.875Z" />
      <path d="M7.1 18.283c.588 1.017 1.283 1.944 2.073 2.762.79.818 1.653 1.505 2.577 2.057.925.552 1.89.952 2.887 1.193.996.24 2 .303 3.003.183 1.002-.12 1.977-.418 2.917-.893.94-.475 1.81-1.115 2.598-1.907.787-.793 1.452-1.725 1.99-2.773.537-1.048.917-2.173 1.142-3.357.225-1.183.29-2.39.2-3.608-.09-1.217-.35-2.39-.773-3.5-.424-1.11-1-2.115-1.723-3.003-.722-.888-1.565-1.63-2.517-2.22-.952-.59-1.984-.997-3.082-1.222-1.098-.224-2.217-.255-3.345-.095-1.128.16-2.222.51-3.27 1.047-1.047.537-2 1.247-2.85 2.12l1.06 1.06c.725-.75 1.535-1.357 2.428-1.815.892-.458 1.835-.763 2.82-.91.984-.147 1.968-.12 2.948.08.98.2 1.903.56 2.767 1.08.863.52 1.622 1.16 2.277 1.92.655.76 1.18 1.62 1.575 2.58.395.96.65 1.975.765 3.043.115 1.068.065 2.125-.15 3.168-.215 1.043-.585 2.033-1.11 2.963-.525.93-1.17 1.758-1.935 2.478-.765.72-1.62 1.298-2.568 1.728-.946.43-1.94.698-2.98.808-1.04.11-2.068.038-3.083-.22-.015-.003-.027-.013-.042-.018Z" opacity=".4" />
    </svg>
  ),
  vue: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.197 1.608h-4.591L12 5.67 9.394 1.608H1.626L12 20.392 22.374 1.608h-3.177ZM3.836 3.065h2.668L12 12.614l5.496-9.549h2.668L12 17.569 3.836 3.065Z" />
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3Zm4.5 15c0 1.5.75 2.25 2.25 2.25s2.25-.75 2.25-2.25v-6h-1.5v6c0 .75-.25 1-1 1s-.75-.25-.75-1h-1.25Zm6.25 1.5c.5.5 1.25.75 2 .75 1.5 0 2.5-.75 2.5-2 0-1.5-1-2-2-2.25l-.5-.125c-.5-.125-1-.25-1-.75 0-.375.25-.625.75-.625s.75.125 1 .5l1-.75c-.375-.625-1.125-1-2-1-1.25 0-2.25.75-2.25 1.875 0 1.25 1 1.75 1.75 2l.5.125c.625.125 1.25.375 1.25.875 0 .5-.5.75-1 .75-.625 0-1-.25-1.25-.75l-1 .75Z" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3Zm10.5 10.5v-1.125H8.375v1.125h1.5V18h1.125v-4.5h1.5Zm1.375 4.688c.313.312.75.562 1.313.562.875 0 1.562-.5 1.562-1.375 0-.813-.5-1.188-1.25-1.438l-.375-.125c-.438-.125-.625-.25-.625-.5 0-.25.188-.438.5-.438s.5.125.688.375l.625-.5c-.25-.438-.75-.75-1.313-.75-.813 0-1.438.5-1.438 1.313 0 .75.563 1.125 1.125 1.313l.375.125c.438.125.75.25.75.562s-.313.5-.625.5c-.438 0-.688-.188-.875-.5l-.688.5c.125.375.5.625.875.875Z" />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.48 6 12 6ZM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.85 9.52 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.48 12 7 12Z" />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-1.5 14.5V8l7 8.5h-1.5L11 10.5v6h-1.5v-6l-2 2.5-1-1.25 3-3.75 3 4v5H10.5Z" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92S3 7.283 3 11.986s2.551 4.542 2.551 4.542h1.521v-2.189s-.082-2.553 2.513-2.647Zm-.056-5.906a.827.827 0 1 1 0 1.654.827.827 0 0 1 0-1.654Z" />
      <path d="M14.415 12.308h-4.328s-2.432-.039-2.432 2.35v3.951S7.286 21 12.064 21c4.574 0 4.289-1.983 4.289-1.983l-.006-2.055h-4.363v-.617h6.096S21 16.717 21 12.014s-2.551-4.542-2.551-4.542h-1.521v2.189s.082 2.553-2.513 2.647Zm.056 5.906a.827.827 0 1 1 0-1.654.827.827 0 0 1 0 1.654Z" />
    </svg>
  ),
  django: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.533 12.249c0 1.43-.089 2.177-.356 2.786-.23.532-.588.934-1.26 1.26l-1.62-.766c.672-.303.942-.609 1.12-1.065.178-.479.222-1.038.222-2.661V3.166H7.53v9.083h.003Zm5.291-5.333v7.093c0 2.107-.154 3.122-.62 3.998-.434.855-1.008 1.397-2.188 1.993l-1.644-.789c1.18-.544 1.754-1.032 2.139-1.779.403-.778.534-1.677.534-4.006V6.916h1.78-.001Zm-.008-3.768h1.797v2.278h-1.797V3.148Zm6.584 6.063c-.223-.038-.401-.054-.624-.054-.885 0-1.457.418-1.457 1.072v.07h2.07v1.549h-2.047v5.287h-1.78v-5.287h-1.12v-1.549h1.12v-.124c0-1.62 1.074-2.606 2.856-2.606.378 0 .68.023.982.092v1.55Z" />
    </svg>
  ),
  rails: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 15.75V21h3v-5.25H3Zm4.5 0V21h3v-5.25h-3Zm4.5 0V21h3v-5.25h-3Zm4.5-3V21h3v-8.25h-3ZM21 9v12h-3V9h3ZM3 12h3v3H3v-3Zm4.5-1.5h3v4.5h-3v-4.5Zm4.5-1.5h3V15h-3V9Zm-9-6h18v3H3V3Z" />
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.94.46 1.27.46 1.7.46 1.38 0 2.17-.84 2.17-2.3V8.27c0-.12-.1-.21-.21-.21h-.93c-.12 0-.22.1-.22.21v8.36c0 .65-.67 1.3-1.77.75l-2.03-1.17a.27.27 0 0 1-.14-.23V7.71c0-.1.05-.18.14-.23l7.44-4.3c.08-.05.2-.05.28 0l7.44 4.3c.09.05.14.14.14.23v8.58c0 .1-.05.18-.14.23l-7.44 4.3c-.08.05-.2.05-.28 0l-1.9-1.13c-.07-.04-.16-.05-.24-.02-.65.29-1.63.44-2.17.23-.07-.03-.16-.08-.24-.15l2.48-1.43a.27.27 0 0 0 .14-.23V7.7c0-.1-.05-.19-.14-.24l-7.44-4.3a.54.54 0 0 0-.56 0Z" />
    </svg>
  ),
  csharp: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm.5 5h1v2h2v1h-2v2h2v1h-2v2h-1v-2h-2v2h-1v-2h-2v-1h2v-2h-2V9h2V7h1v2h2V7Zm-2 3v2h2v-2h-2Z" />
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2h1c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7Zm2 12h-4v-2h4v2Zm1.5-4h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7c.28 0 .5.22.5.5s-.22.5-.5.5Z" />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C9.243 2 7 4.243 7 7c0 2.194 1.432 4.043 3.4 4.705-.012.082-.025.163-.025.295v7.5c0 .828.448 1.5 1 1.5h1.25c.552 0 1-.672 1-1.5V12c0-.132-.013-.213-.025-.295C15.568 11.043 17 9.194 17 7c0-2.757-2.243-5-5-5Zm.625 17.5h-1.25V12h1.25v7.5ZM12 10c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3Z" />
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="m7.164 13.342-1.407 4.622h-.994l1.606-4.622h.795Zm2.393 0-1.407 4.622h-.994l1.606-4.622h.795Zm4.279 3.728c-.199.199-.498.298-.896.298H11.9v-1.193h.994c.199 0 .348.05.448.149.1.1.149.249.149.448 0 .099-.05.199-.149.298h.493Zm.596-1.89c-.249-.199-.548-.298-.896-.298h-1.689v3.082h.994v-.994h.596c.398 0 .697-.1.896-.298.199-.199.298-.448.298-.746 0-.348-.1-.597-.199-.746Zm3.132.895-.448 1.094-.448-1.094h-1.094l.944 1.889-.994 1.89h1.094l.498-1.193.498 1.192h1.094l-.994-1.889.944-1.889h-1.094ZM6.867 5.334l-.398 1.292-.398-1.292H5.078l.696 2.089-.746 2.188h.993l.448-1.392.448 1.392h.994l-.746-2.188.696-2.089H6.867Zm4.976 0-.398 1.292-.398-1.292H10.054l.696 2.089-.746 2.188h.994l.447-1.392.448 1.392h.994l-.746-2.188.696-2.089h-.994Zm4.976 0-.398 1.292-.398-1.292h-.994l.696 2.089-.746 2.188h.994l.448-1.392.447 1.392h.994l-.746-2.188.696-2.089h-.993Z" />
    </svg>
  ),
  sap: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 5v14h18V5H3Zm9 12H6v-2h6v2Zm6 0h-4v-2h4v2Zm0-4H6V7h12v6Z" />
    </svg>
  ),
  mirakl: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.18 6.63 3.69L12 11.55 5.37 7.87 12 4.18ZM5 9.5l6 3.33v6.34l-6-3.33V9.5Zm8 9.67v-6.34l6-3.33v6.34l-6 3.33Z" />
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4Zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2Zm6 12c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17Zm0-5c0 .5-2.13 2-6 2s-6-1.5-6-2V9.77c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V12Z" />
    </svg>
  ),
  ecgrid: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4h16v16H4V4Zm2 2v12h12V6H6Zm2 2h3v3H8V8Zm5 0h3v3h-3V8Zm-5 5h3v3H8v-3Zm5 0h3v3h-3v-3Z" />
    </svg>
  ),
  commercehub: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93Zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39Z" />
    </svg>
  ),
  edi: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6Zm4 18H6V4h7v5h5v11Zm-9-7h6v2H9v-2Zm0 4h6v2H9v-2Zm0-8h4v2H9V9Z" />
    </svg>
  ),
  klaviyo: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    </svg>
  ),
  vps: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 3H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2ZM5 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm3 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm12-1h-6V5h6v1ZM20 13H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2ZM5 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm3 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm12-1h-6v-1h6v1Z" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="m21.62 11.11-8.73-8.73a1.3 1.3 0 0 0-1.83 0L9.14 4.3l2.31 2.31a1.54 1.54 0 0 1 1.95 1.97l2.23 2.23a1.55 1.55 0 1 1-.93.86l-2.08-2.08v5.47a1.55 1.55 0 1 1-1.28-.02V9.43a1.55 1.55 0 0 1-.84-2.03L8.21 5.11l-5.83 5.83a1.3 1.3 0 0 0 0 1.83l8.73 8.73a1.3 1.3 0 0 0 1.83 0l8.68-8.68a1.3 1.3 0 0 0 0-1.71Z" />
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.98 11.08h2.12v-1.9h-2.12v1.9Zm-2.95 0h2.12v-1.9h-2.12v1.9Zm-2.99 0h2.12v-1.9H8.04v1.9Zm-2.99 0h2.12v-1.9H5.05v1.9Zm2.99-2.73h2.12V6.44H8.04v1.91Zm2.99 0h2.12V6.44h-2.12v1.91Zm2.95 0h2.12V6.44h-2.12v1.91ZM8.04 5.63h2.12V3.72H8.04v1.91Zm2.99 0h2.12V3.72h-2.12v1.91Zm11.01 4.42c-.56-.39-1.84-.53-2.83-.33-.13-.94-.64-1.75-1.56-2.48l-.53-.35-.35.53c-.68 1.04-.87 2.75-.16 3.87-.32.18-.95.42-1.79.4H2.07l-.05.32c-.14 1.48.09 3.42 1.05 4.77.92 1.29 2.29 1.95 4.08 1.95 3.89 0 6.76-1.79 8.11-5.04.53.01 1.67.01 2.25-1.11.01-.02.15-.31.5-1.02l.18-.34-.21-.17Z" />
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.5 2A3.5 3.5 0 0 0 5 5.5c0 1.302.717 2.436 1.777 3.036A3.485 3.485 0 0 0 5 11.5c0 1.302.717 2.436 1.777 3.036A3.497 3.497 0 0 0 8.5 21c1.93 0 3.5-1.57 3.5-3.5V14h.036A3.485 3.485 0 0 0 15.5 15a3.5 3.5 0 1 0 0-7 3.485 3.485 0 0 0-3.464 3H12V5.5c0-.978.402-1.863 1.05-2.5H8.5ZM7 5.5C7 4.12 8.12 3 9.5 3h2v5h-2A2.5 2.5 0 0 1 7 5.5Zm6 0A2.5 2.5 0 0 1 15.5 3a2.5 2.5 0 0 1 0 5H13V5.5Zm-6 6a2.5 2.5 0 0 1 2.5-2.5h2v5h-2A2.5 2.5 0 0 1 7 11.5ZM9.5 20A2.5 2.5 0 0 1 7 17.5 2.5 2.5 0 0 1 9.5 15h2v2.5a2.5 2.5 0 0 1-2.5 2.5Zm6-6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
    </svg>
  ),
};

// Magnetic Skill Card with 3D tilt effect
function SkillCard({ skill, index }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    gsap.to(card, {
      duration: 0.3,
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.05,
      ease: 'power2.out',
    });

    if (glow) {
      gsap.to(glow, {
        duration: 0.3,
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        opacity: 0.15,
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const glow = glowRef.current;

    gsap.to(card, {
      duration: 0.5,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      ease: 'elastic.out(1, 0.5)',
    });

    if (glow) {
      gsap.to(glow, {
        duration: 0.3,
        opacity: 0,
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="skill-card relative group cursor-pointer"
      style={{
        '--skill-color': skill.color,
        '--index': index,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-full p-6 rounded-2xl border border-border bg-bg-card/80 backdrop-blur-sm overflow-hidden transition-colors duration-300 group-hover:border-[var(--skill-color)]/50">
        {/* Animated glow follow cursor */}
        <div
          ref={glowRef}
          className="absolute w-32 h-32 rounded-full pointer-events-none opacity-0 blur-3xl"
          style={{ backgroundColor: skill.color }}
        />

        {/* Icon */}
        <div
          className="w-12 h-12 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
          style={{ color: skill.color }}
        >
          {SkillIcons[skill.icon] || (
            <div className="w-full h-full flex items-center justify-center text-2xl font-bold font-mono">
              {skill.abbrev}
            </div>
          )}
        </div>

        {/* Name */}
        <h3 className="text-text-primary font-display text-lg font-semibold mb-1 transition-colors duration-300 group-hover:text-[var(--skill-color)]">
          {skill.name}
        </h3>

        {/* Description */}
        <p className="text-text-muted text-sm font-body">{skill.description}</p>

        {/* Category badge */}
        <div
          className="absolute top-4 right-4 px-2 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider opacity-50 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            color: skill.color,
            backgroundColor: `${skill.color}15`,
          }}
        >
          {skill.category}
        </div>

        {/* Bottom highlight line */}
        <div
          className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </div>
  );
}

// Infinite Marquee Component
function Marquee({ children, direction = 'left', speed = 50 }) {
  const marqueeRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const content = contentRef.current;
    if (!marquee || !content) return;

    const contentWidth = content.offsetWidth;
    const duration = contentWidth / speed;

    gsap.set(content, { x: direction === 'left' ? 0 : -contentWidth });

    const tween = gsap.to(content, {
      x: direction === 'left' ? -contentWidth : 0,
      duration: duration,
      ease: 'none',
      repeat: -1,
    });

    // Pause on hover
    marquee.addEventListener('mouseenter', () => tween.pause());
    marquee.addEventListener('mouseleave', () => tween.resume());

    return () => tween.kill();
  }, [direction, speed]);

  return (
    <div
      ref={marqueeRef}
      className="overflow-hidden whitespace-nowrap cursor-pointer"
    >
      <div ref={contentRef} className="inline-flex">
        {children}
        {children}
      </div>
    </div>
  );
}

// Category Tab Button
function CategoryTab({ category, label, color, isActive, onClick }) {
  return (
    <button
      onClick={() => onClick(category)}
      className={`relative px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
        isActive
          ? 'text-bg-primary'
          : 'text-text-secondary hover:text-text-primary'
      }`}
      style={{
        backgroundColor: isActive ? color : 'transparent',
        boxShadow: isActive ? `0 0 20px ${color}40` : 'none',
      }}
    >
      {label}
      {!isActive && (
        <span
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-full transition-all duration-300"
          style={{ backgroundColor: color }}
        />
      )}
    </button>
  );
}

export function Skills() {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const handleCategoryChange = (category) => {
    if (isAnimating || category === activeCategory) return;
    setIsAnimating(true);

    // Animate out current cards
    gsap.to('.skill-card', {
      opacity: 0,
      y: 20,
      scale: 0.95,
      duration: 0.3,
      stagger: 0.02,
      onComplete: () => {
        setActiveCategory(category);
        // Animate in new cards after state update
        setTimeout(() => {
          gsap.fromTo(
            '.skill-card',
            { opacity: 0, y: 30, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              stagger: 0.05,
              ease: 'back.out(1.7)',
              onComplete: () => setIsAnimating(false),
            }
          );
        }, 50);
      },
    });
  };

  return (
    <Section ref={sectionRef} id="skills" className="overflow-hidden">
      <SectionHeader
        subtitle="Technologies I've Worked With"
        title="Skills & Technologies"
        align="center"
      />

      {/* Infinite Marquee */}
      <div className="skills-marquee mb-16 -mx-4 sm:-mx-6">
        <Marquee direction="left" speed={30}>
          {skills.map((skill) => (
            <div
              key={`marquee-${skill.id}`}
              className="inline-flex items-center gap-3 px-6 py-3 mx-2 rounded-full border border-border/50 bg-bg-card/30 backdrop-blur-sm hover:border-accent-primary/30 transition-colors duration-300"
            >
              <div className="w-5 h-5" style={{ color: skill.color }}>
                {SkillIcons[skill.icon] || (
                  <span className="font-mono text-sm font-bold">
                    {skill.abbrev}
                  </span>
                )}
              </div>
              <span className="font-mono text-sm text-text-secondary">
                {skill.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Category Tabs */}
      <div className="category-tabs flex flex-wrap justify-center gap-2 mb-12">
        {Object.entries(skillCategories).map(([key, { label, color }]) => (
          <div key={key} className="category-tab">
            <CategoryTab
              category={key}
              label={label}
              color={color}
              isActive={activeCategory === key}
              onClick={handleCategoryChange}
            />
          </div>
        ))}
      </div>

      {/* Skills Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto"
      >
        {filteredSkills.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index} />
        ))}
      </div>

      {/* Bottom decorative text */}
      <div className="mt-16 text-center">
        <p className="text-text-muted text-sm max-w-xl mx-auto font-body leading-relaxed">
          Production-minded engineering across commerce, integrations, and operations.
          <br />
          <span className="inline-flex items-center gap-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-accent-primary font-mono">
              Currently focused on reliable, maintainable systems
            </span>
          </span>
        </p>
      </div>
    </Section>
  );
}
