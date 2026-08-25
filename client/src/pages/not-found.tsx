import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4 glass-card border-white/10">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <AlertCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-display font-bold text-foreground">404</h1>
            <h2 className="text-xl font-bold text-foreground">{t("notFound.title")}</h2>
          </div>

          <p className="text-muted-foreground mb-8">
            {t("notFound.text")}
          </p>

          <Link href="/">
            <Button className="rounded-full px-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("notFound.back")}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
