import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {subtitle && (
          <span className="text-primary font-semibold tracking-wider uppercase text-xs mb-3 block">
            {subtitle}
          </span>
        )}
        <h2 className="text-xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
          {title}
        </h2>
        <div className={`h-1.5 w-24 bg-primary rounded-full mt-2 ${align === "center" ? "mx-auto" : ""}`} />
      </motion.div>
    </div>
  );
}
