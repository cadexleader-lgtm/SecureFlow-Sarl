import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeading } from "@/components/SectionHeading";
import { SEO, seoConfig } from "@/components/SEO";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Loader2, ArrowRight } from "lucide-react";
import { z } from "zod";
import { useLanguage } from "@/contexts/LanguageContext";

type ContactFormValues = z.infer<typeof insertContactInquirySchema>;

export default function Contact() {
  const { t } = useLanguage();
  const mutation = useSubmitContact();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      country: "",
      transactionType: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-background">
      <SEO {...seoConfig.contact} />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary-rgb),0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(var(--primary-rgb),0.05),transparent_50%)] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading 
            title={t("contact.hero.title")} 
            subtitle={t("contact.hero.subtitle")} 
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-primary/10" />
              
              <h3 className="text-xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-8 tracking-tight">{t("contact.headquarters")}</h3>
              
              <div className="space-y-6 md:space-y-10">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 md:gap-6"
                >
                  <div className="h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20 shadow-lg shadow-primary/5">
                    <MapPin className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm uppercase tracking-widest font-bold text-primary mb-1">{t("contact.office")}</h4>
                    <p className="text-foreground text-sm md:text-lg font-light leading-relaxed">
                      Bénin, Cotonou Ilot 1480,<br />Quartier Kouhounou
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 md:gap-6"
                >
                  <div className="h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20 shadow-lg shadow-primary/5">
                    <Mail className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm uppercase tracking-widest font-bold text-primary mb-1">{t("contact.email")}</h4>
                    <p className="text-foreground text-sm md:text-lg font-light break-all">infosecureflowco@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 md:gap-6"
                >
                  <div className="h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20 shadow-lg shadow-primary/5">
                    <Phone className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm uppercase tracking-widest font-bold text-primary mb-1">{t("contact.phone")}</h4>
                    <div className="flex flex-col gap-2 mt-1">
                      <a href="tel:+22950636363" className="text-foreground text-sm md:text-lg font-light hover:text-primary transition-colors flex items-center gap-2">
                        +229 50636363 <span className="text-[10px] bg-secondary dark:bg-white/5 px-2 py-0.5 rounded-full uppercase tracking-tighter">{t("contact.calls")}</span>
                      </a>
                      <a href="https://wa.me/22950363636" target="_blank" rel="noopener noreferrer" className="text-foreground text-sm md:text-lg font-light hover:text-primary transition-colors flex items-center gap-2">
                        +229 50363636 <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full uppercase tracking-tighter">{t("contact.whatsapp")}</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-10 rounded-[2.5rem] border border-border dark:border-white/5 bg-secondary/50 dark:bg-white/[0.02] backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-primary/30" />
              <h4 className="text-foreground font-bold text-xl mb-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {t("contact.privacy.title")}
              </h4>
              <p className="text-muted-foreground leading-relaxed font-light">
                {t("contact.privacy.text")}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative">
              <div className="mb-6 md:mb-10">
                <h3 className="text-xl md:text-3xl font-display font-bold text-foreground mb-2">{t("contact.form.title")}</h3>
                <p className="text-sm md:text-base text-muted-foreground font-light">{t("contact.form.subtitle")}</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-xs uppercase tracking-[0.2em] font-bold text-primary/80">{t("contact.form.name")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("contact.form.namePlaceholder")} {...field} className="h-14 bg-secondary dark:bg-white/[0.03] border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground/50 rounded-2xl focus:border-primary/50 focus:ring-primary/20 transition-all" />
                          </FormControl>
                          <FormMessage className="text-[10px] uppercase tracking-wider" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-xs uppercase tracking-[0.2em] font-bold text-primary/80">{t("contact.form.email")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("contact.form.emailPlaceholder")} {...field} className="h-14 bg-secondary dark:bg-white/[0.03] border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground/50 rounded-2xl focus:border-primary/50 focus:ring-primary/20 transition-all" />
                          </FormControl>
                          <FormMessage className="text-[10px] uppercase tracking-wider" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-xs uppercase tracking-[0.2em] font-bold text-primary/80">{t("contact.form.company")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("contact.form.companyPlaceholder")} {...field} className="h-14 bg-secondary dark:bg-white/[0.03] border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground/50 rounded-2xl focus:border-primary/50 focus:ring-primary/20 transition-all" />
                          </FormControl>
                          <FormMessage className="text-[10px] uppercase tracking-wider" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-xs uppercase tracking-[0.2em] font-bold text-primary/80">{t("contact.form.country")}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 bg-secondary dark:bg-white/[0.03] border-border dark:border-white/10 text-foreground rounded-2xl focus:border-primary/50 transition-all">
                                <SelectValue placeholder={t("contact.form.countryPlaceholder")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-card border-border text-foreground max-h-[300px] rounded-2xl shadow-2xl">
                              <SelectItem value="global">{t("contact.form.global")}</SelectItem>
                              <SelectItem value="benin">Bénin</SelectItem>
                              <SelectItem value="china">Chine</SelectItem>
                              <SelectItem value="france">France</SelectItem>
                              <SelectItem value="uae">Émirats Arabes Unis (Dubaï)</SelectItem>
                              <SelectItem value="niger">Niger</SelectItem>
                              <SelectItem value="burkina">Burkina Faso</SelectItem>
                              <SelectItem value="mali">Mali</SelectItem>
                              <SelectItem value="togo">Togo</SelectItem>
                              <SelectItem value="ghana">Ghana</SelectItem>
                              <SelectItem value="ivory_coast">Côte d'Ivoire</SelectItem>
                              <SelectItem value="senegal">Sénégal</SelectItem>
                              <SelectItem value="guinea">Guinée</SelectItem>
                              <SelectItem value="cameroon">Cameroun</SelectItem>
                              <SelectItem value="gabon">Gabon</SelectItem>
                              <SelectItem value="congo">Congo</SelectItem>
                              <SelectItem value="drc">RDC</SelectItem>
                              <SelectItem value="usa">États-Unis</SelectItem>
                              <SelectItem value="canada">Canada</SelectItem>
                              <SelectItem value="uk">Royaume-Uni</SelectItem>
                              <SelectItem value="germany">Allemagne</SelectItem>
                              <SelectItem value="belgium">Belgique</SelectItem>
                              <SelectItem value="turkey">Turquie</SelectItem>
                              <SelectItem value="india">Inde</SelectItem>
                              <SelectItem value="brazil">Brésil</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-[10px] uppercase tracking-wider" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="transactionType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-xs uppercase tracking-[0.2em] font-bold text-primary/80">{t("contact.form.interest")}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-14 bg-secondary dark:bg-white/[0.03] border-border dark:border-white/10 text-foreground rounded-2xl focus:border-primary/50 transition-all">
                              <SelectValue placeholder={t("contact.form.interestPlaceholder")} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-border text-foreground rounded-2xl shadow-2xl">
                            <SelectItem value="logistics">{t("contact.form.logistics")}</SelectItem>
                            <SelectItem value="security">{t("contact.form.security")}</SelectItem>
                            <SelectItem value="mining">{t("contact.form.mining")}</SelectItem>
                            <SelectItem value="finance">{t("contact.form.finance")}</SelectItem>
                            <SelectItem value="other">{t("contact.form.other")}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-[10px] uppercase tracking-wider" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-xs uppercase tracking-[0.2em] font-bold text-primary/80">{t("contact.form.message")}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t("contact.form.messagePlaceholder")} 
                            className="min-h-[160px] bg-secondary dark:bg-white/[0.03] border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground/50 rounded-2xl focus:border-primary/50 transition-all py-5 resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-[10px] uppercase tracking-wider" />
                      </FormItem>
                    )}
                  />

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button 
                      type="submit" 
                      disabled={mutation.isPending}
                      className="w-full h-16 text-xs uppercase tracking-[0.3em] font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl shadow-xl shadow-primary/20 group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" /> {t("contact.form.sending")}
                          </>
                        ) : (
                          <>
                            {t("contact.form.submit")}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
