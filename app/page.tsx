import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Wand2, Zap, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-500 to-indigo-600">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <a className="flex items-center justify-center" href="#">
          <Wand2 className="h-6 w-6 text-white" />
          <span className="ml-2 text-2xl font-bold text-white">
            AI Image Wizard
          </span>
        </a>

        <Link className="text-white font-medium" href="/pricing-page">
          Pricing
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Create Stunning Visuals with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Easily generate high-quality, unique images. No professional
                  skills required, bring your ideas to life instantly.
                </p>
              </div>
              <Link href="/features-page">
                <Button className="bg-white text-purple-600 hover:bg-gray-100">
                  Start Creating Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-600">
              Why Choose Our AI Image Generator
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Zap className="h-12 w-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Fast Generation</h3>
                  <p className="text-center text-gray-600">
                    Generate high-quality images in seconds, saving your
                    valuable time.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <ImageIcon className="h-12 w-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Diverse Styles</h3>
                  <p className="text-center text-gray-600">
                    Support for various artistic styles and image types to meet
                    different creative needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Wand2 className="h-12 w-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    Intelligent Editing
                  </h3>
                  <p className="text-center text-gray-600">
                    Powerful AI editing features for easy adjustment and
                    optimization of generated images.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-600">
              AI Generated Artwork Showcase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img
                  key={i}
                  alt={`AI Generated Image Example ${i}`}
                  className="aspect-square object-cover border border-gray-200 w-full rounded-lg"
                  height="400"
                  src={`/placeholder.svg?height=400&width=400`}
                  width="400"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">
          © 2024 AI Image Wizard. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </a>
        </nav>
      </footer>
    </div>
  );
}
