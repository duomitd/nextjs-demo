"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Image as ImageIcon, Loader2, Wand2 } from "lucide-react";

export default function FeaturesPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate image generation
    setTimeout(() => {
      setGeneratedImage("/placeholder.svg?height=512&width=512");
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        AI Image Generator
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Image Generation</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="prompt">Prompt</Label>
                <Input
                  id="prompt"
                  placeholder="Describe the image you want to generate..."
                />
              </div>
              <div>
                <Label htmlFor="style">Style</Label>
                <Select>
                  <SelectTrigger id="style">
                    <SelectValue placeholder="Select a style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realistic">Realistic</SelectItem>
                    <SelectItem value="cartoon">Cartoon</SelectItem>
                    <SelectItem value="abstract">Abstract</SelectItem>
                    <SelectItem value="sketch">Sketch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Tabs defaultValue="basic">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="basic">Basic</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>
                <TabsContent value="basic">
                  <div className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="size">Image Size</Label>
                      <Select>
                        <SelectTrigger id="size">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="256x256">256x256</SelectItem>
                          <SelectItem value="512x512">512x512</SelectItem>
                          <SelectItem value="1024x1024">1024x1024</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="advanced">
                  <div className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="creativity">Creativity Level</Label>
                      <Slider
                        id="creativity"
                        min={0}
                        max={100}
                        step={1}
                        defaultValue={[50]}
                        className="mt-2"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="hd" />
                      <Label htmlFor="hd">Enable HD</Label>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              <Button
                className="w-full"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate Image
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Generated Image</h2>
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
              {generatedImage ? (
                <img
                  src={generatedImage}
                  alt="Generated image"
                  className="w-full h-full object-cover"
                />
              ) : (
                <ImageIcon className="h-24 w-24 text-gray-400" />
              )}
            </div>
            {generatedImage && (
              <Button className="w-full mt-4" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Image
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
