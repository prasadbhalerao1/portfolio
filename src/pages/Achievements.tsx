import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, Calendar, Building2, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { achievements } from "@/data/achievements";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AchievementsPage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Achievements - Prasad Bhalerao | CSBS Student</title>
        <meta
          name="description"
          content="Explore Prasad Bhalerao's professional certifications, awards, and achievements in competitive programming and web development."
        />
        <meta
          name="keywords"
          content="Prasad Bhalerao, Achievements, Certifications, Awards, CSBS, JSPM, Competitive Programming, Web Development"
        />
        <link
          rel="canonical"
          href="https://prasadbhalerao.vercel.app/achievements"
        />
        <meta
          property="og:title"
          content="Achievements - Prasad Bhalerao | CSBS Student"
        />
        <meta
          property="og:description"
          content="Explore Prasad Bhalerao's professional certifications, awards, and achievements in competitive programming and web development."
        />
        <meta
          property="og:url"
          content="https://prasadbhalerao.vercel.app/achievements"
        />
      </Helmet>
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </motion.div>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Award className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
              Achievements & Certifications
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of my professional certifications and accomplishments
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {achievements.map((achievement) => (
              <motion.div key={achievement.id} variants={cardVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg bg-muted h-64">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23334155' width='400' height='300'/%3E%3Ctext fill='%2394a3b8' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3ECertificate%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </CardTitle>

                    <div className="space-y-3 mb-4">
                      {achievement.date && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {achievement.date}
                        </div>
                      )}

                      {achievement.issuer && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Building2 className="h-4 w-4 mr-2" />
                          {achievement.issuer}
                        </div>
                      )}

                      {achievement.credentialId && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <FileText className="h-4 w-4 mr-2" />
                          <span className="truncate">
                            ID: {achievement.credentialId}
                          </span>
                        </div>
                      )}
                    </div>

                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {achievements.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Award className="h-24 w-24 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-xl text-muted-foreground">
                No achievements added yet. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AchievementsPage;
