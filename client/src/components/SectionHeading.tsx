import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-10 md:mb-14 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {subtitle && (
          <span className="eyebrow mb-4 block">
            {subtitle}
          </span>
        )}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5 leading-[1.1]">
          {title}
        </h2>
        <div className={`h-1 w-12 bg-primary rounded-full mt-2 ${align === "center" ? "mx-auto" : ""}`} />
      </motion.div>
    </div>
  );
}
