"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Trophy, Zap, Shield, Copy, ExternalLink, Play, MessageCircle, ShoppingBag, Pickaxe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function FirstSkyLanding() {
  const [copied, setCopied] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const copyIP = () => {
    navigator.clipboard.writeText("play.firstsky.net")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <Head>
        <title>FirstSky webdesign</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
          <div className="container mx-auto px-4 py-4 flex items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                FirstSky
              </span>
            </div>
            <div className="hidden md:flex items-center justify-center space-x-6 flex-1">
              <Link href="#features" className="hover:text-cyan-400 transition-colors">
                Vote
              </Link>
              <Link href="#gameplay" className="hover:text-cyan-400 transition-colors">
                Boutique
              </Link>
              <Link href="#community" className="hover:text-cyan-400 transition-colors">
                Communauté
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white bg-transparent"
              >
                Connexion
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
              >
                Inscription
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background with parallax effect */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              backgroundImage: "url(/images/firstsky-hero.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(2px)",
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90" />

          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            {/* Stats */}
            <div className="flex justify-center space-x-8 mb-8">
              <div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-yellow-500/30">
                <div className="text-yellow-400 font-bold text-xl">986</div>
                <div className="text-xs text-yellow-300">Joueurs connectés</div>
              </div>
              <div className="bg-cyan-500/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-cyan-500/30">
                <div className="text-cyan-400 font-bold text-xl">12508</div>
                <div className="text-xs text-cyan-300">Membres Discord</div>
              </div>
            </div>

            {/* Main title */}
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
              FIRSTSKY
            </h1>

            <div className="text-xl md:text-2xl text-slate-300 mb-8 font-medium">
              Le Meilleur Serveur Minecraft Skyblock OneBlock
            </div>

            {/* IP Address */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-600">
              <div className="text-sm text-slate-400 mb-2">Adresse IP du serveur</div>
              <div className="flex items-center justify-center space-x-4">
                <code className="text-2xl md:text-3xl font-mono text-cyan-400 font-bold">play.firstsky.net</code>
                <Button
                  onClick={copyIP}
                  variant="outline"
                  size="sm"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 bg-transparent"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  {copied ? "Copié !" : "Copier"}
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 text-lg transform hover:scale-105 transition-all duration-200"
              >
                <Play className="h-5 w-5 mr-2" />
                Rejoindre l'aventure
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 text-lg transform hover:scale-105 transition-all duration-200 bg-transparent"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Discord
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Une Aventure Unique Depuis 2021
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                FirstSky offre aux joueurs de tous niveaux une aventure passionnante où chacun peut s'amuser avec ses
                amis tout en rivalisant pour atteindre les sommets des différents classements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-500/20 p-3 rounded-lg mr-4">
                      <Pickaxe className="h-6 w-6 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">OneBlock Réinventé</h3>
                  </div>
                  <p className="text-slate-300">
                    Commencez sur un unique bloc flottant dans le vide. Minez, développez et créez votre empire céleste
                    avec des défis uniques.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-500/20 p-3 rounded-lg mr-4">
                      <Zap className="h-6 w-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white"> Farm2Win Équilibré</h3>
                  </div>
                  <p className="text-slate-300">
                    Plus vous farmez, plus vous progressez ! Notre économie équilibrée récompense l'effort et la
                    stratégie.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4">
                      <Trophy className="h-6 w-6 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Six Classements</h3>
                  </div>
                  <p className="text-slate-300">
                    Montrez vos compétences dans nos six classements distincts et dominez l'économie du serveur.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                      <Shield className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white"> Événements Épiques</h3>
                  </div>
                  <p className="text-slate-300">
                    {
                      "Participez à des événements palpitants organisés régulièrement :\n            largages, quêtes spéciales, défis communautaires et bien plus\n            encore."
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                      <Users className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Java &amp; Bedrock</h3>
                  </div>
                  <p className="text-slate-300">
                    Accessible depuis toutes les plateformes ! Rejoignez vos amis peu importe leur version de Minecraft.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                      <ShoppingBag className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Shop Intégré</h3>
                  </div>
                  <p className="text-slate-300">
                    Échangez avec d'autres joueurs et construisez votre richesse pour dominer l'économie du serveur.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gameplay Preview */}
        <section id="gameplay" className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Aperçu du Gameplay
              </h2>
              <p className="text-xl text-slate-300">
                Découvrez l'univers unique de FirstSky à travers ces captures d'écran
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl bg-slate-700/50 aspect-video hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={`Gameplay ${i}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold mb-2">Capture {i}</h3>
                      <p className="text-slate-300 text-sm">Découvrez les mécaniques uniques de FirstSky</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Rejoignez Notre Communauté
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Plus de 2700 joueurs nous font déjà confiance. Rejoignez l'aventure FirstSky dès maintenant !
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/30 hover:border-purple-400 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Discord</h3>
                  <p className="text-slate-300 mb-6">
                    Rejoignez notre communauté Discord active avec plus de 2700 membres !
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Rejoindre Discord
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-500/30 hover:border-green-400 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <ShoppingBag className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Boutique</h3>
                  <p className="text-slate-300 mb-6">Soutenez le serveur et obtenez des avantages exclusifs !</p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visiter la Boutique
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    FirstSky
                  </span>
                </div>
                <p className="text-slate-400">Le meilleur serveur Minecraft Skyblock OneBlock français depuis 2021.</p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4">Liens Rapides</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>
                    <Link href="#" className="hover:text-cyan-400 transition-colors">
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-cyan-400 transition-colors">
                      Règlement
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-cyan-400 transition-colors">
                      Wiki
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-cyan-400 transition-colors">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4">Communauté</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>
                    <Link href="#" className="hover:text-cyan-400 transition-colors">
                      Discord
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-cyan-400 transition-colors">
                      Forum
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-cyan-400 transition-colors">
                      Vote
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-cyan-400 transition-colors">
                      Classements
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4">Serveur</h4>
                <div className="space-y-2 text-slate-400">
                  <div>
                    IP: <code className="text-cyan-400">play.firstsky.net</code>
                  </div>
                  <div>Version: 1.20+</div>
                  <div>Type: OneBlock Skyblock</div>
                  <div>Plateforme: Java & Bedrock</div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
              <p>&copy; 2024 FirstSky.net - Tous droits réservés</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
