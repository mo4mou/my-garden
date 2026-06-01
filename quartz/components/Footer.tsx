import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    const shareId = (cfg?.analytics as any)?.shareId

    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        {shareId && (
          <a
            class="visitor-badge"
            href={`https://cloud.umami.is/share/${shareId}`}
            target="_blank"
            rel="noopener noreferrer"
            title="查看访问统计"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>stats</span>
          </a>
        )}
      </footer>
    )
  }

  Footer.css = style + `
    .visitor-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.35em;
      font-size: 0.75rem;
      color: var(--gray);
      opacity: 0.7;
      padding: 0.15em 0;
      text-decoration: none;
      transition: opacity 0.2s;
    }
    .visitor-badge:hover {
      opacity: 1;
    }
    .visitor-badge svg {
      flex-shrink: 0;
    }
  `
  return Footer
}) satisfies QuartzComponentConstructor
