import { Youtube, Instagram, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiLinkedin, SiInstagram, SiYoutube, SiX } from "react-icons/si";

const socialPlatforms = [
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    url: "https://linkedin.com/company/modex",
    color: "bg-[#0A66C2]",
    followers: "5K+",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://instagram.com/modex",
    color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
    followers: "10K+",
  },
  {
    name: "X (Twitter)",
    icon: SiX,
    url: "https://twitter.com/modex",
    color: "bg-black dark:bg-white dark:text-black",
    followers: "3K+",
  },
  {
    name: "YouTube",
    icon: SiYoutube,
    url: "https://youtube.com/@modex",
    color: "bg-[#FF0000]",
    followers: "2K+",
  },
];

const youtubeVideos = [
  { id: 1, title: "مقدمة عن مسابقة CFO Computation", views: "1.2K" },
  { id: 2, title: "كيف تستعد للمرحلة الأولى", views: "890" },
  { id: 3, title: "نصائح من الفائزين السابقين", views: "2.1K" },
];

const instagramPosts = [
  { id: 1, type: "إعلان", engagement: "234" },
  { id: 2, type: "نصيحة", engagement: "456" },
  { id: 3, type: "قصة نجاح", engagement: "789" },
  { id: 4, type: "تحديث", engagement: "321" },
];

export function MediaSection() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            الوسائط الاجتماعية
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-media-title">
            تابعونا على منصات التواصل
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ابقَ على اطلاع بآخر الأخبار والتحديثات وشارك في مجتمعنا المتنامي
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              data-testid={`link-social-platform-${platform.name.toLowerCase()}`}
            >
              <Card className="border-card-border bg-card overflow-visible h-full">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-14 h-14 mx-auto mb-4 rounded-xl ${platform.color} flex items-center justify-center text-white transition-transform group-hover:scale-110`}
                  >
                    <platform.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{platform.name}</h3>
                  <p className="text-primary font-medium">{platform.followers}</p>
                  <p className="text-muted-foreground text-xs">متابع</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-card-border bg-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FF0000] flex items-center justify-center">
                    <Youtube className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground">قناة YouTube</h3>
                </div>
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href="https://youtube.com/@modex" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    زيارة القناة
                  </a>
                </Button>
              </div>
              <div className="space-y-4">
                {youtubeVideos.map((video) => (
                  <div
                    key={video.id}
                    className="flex gap-4 p-3 bg-muted/50 rounded-lg hover-elevate cursor-pointer"
                    data-testid={`youtube-video-${video.id}`}
                  >
                    <div className="w-32 h-20 bg-muted rounded-md flex items-center justify-center flex-shrink-0">
                      <Youtube className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground mb-1 line-clamp-2">
                        {video.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">{video.views} مشاهدة</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-card-border bg-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground">منشورات Instagram</h3>
                </div>
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href="https://instagram.com/modex" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    زيارة الحساب
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {instagramPosts.map((post) => (
                  <div
                    key={post.id}
                    className="aspect-square bg-muted rounded-lg flex flex-col items-center justify-center p-4 hover-elevate cursor-pointer"
                    data-testid={`instagram-post-${post.id}`}
                  >
                    <Instagram className="h-8 w-8 text-muted-foreground mb-2" />
                    <span className="text-foreground font-medium text-sm">{post.type}</span>
                    <span className="text-muted-foreground text-xs">{post.engagement} تفاعل</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              انضم إلى مجتمعنا
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              تابعنا على منصات التواصل الاجتماعي للحصول على آخر الأخبار والتحديثات والمحتوى الحصري
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full ${platform.color} flex items-center justify-center text-white transition-transform hover:scale-110`}
                >
                  <platform.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
