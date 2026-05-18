import Link from "next/link";
import { getBreadcrumbListSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/site-config";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: "Inicio", href: "/" }, ...items];

  const schemaItems = allItems.map((item) => ({
    name: item.name,
    url: `${siteConfig.url}${item.href}`,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbListSchema(schemaItems)),
        }}
      />
      <nav aria-label="Breadcrumb">
        <ol
          className="flex flex-wrap items-center gap-1.5 text-sm"
          style={{ color: "var(--color-rp-text-subtle)" }}
        >
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {index > 0 && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    style={{ color: "var(--color-rp-text-muted)" }}
                    className="font-medium"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:underline underline-offset-2 transition-colors"
                    style={{ color: "var(--color-rp-text-subtle)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--color-rp-accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--color-rp-text-subtle)")
                    }
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
