"use client";

import { ElevenPage } from "@/subframe/layouts/ElevenPage";
import { Button } from "@/subframe/components/Button";
import { Tabs } from "@/subframe/components/Tabs";
import { Card } from "@/subframe/components/Card";

function VoicesPage() {
  return (
    <ElevenPage>
      <div className="flex w-full flex-col items-start gap-4 bg-neutral-50">
        <div className="flex w-full flex-col items-start border-b border-solid border-neutral-border bg-default-background">
          <div className="flex w-full items-center gap-2 pt-6 pr-6 pb-6 pl-6">
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1">
              <span className="w-full text-heading-2 font-heading-2 text-default-font">
                Voices
              </span>
              <span className="text-body font-body text-subtext-color">
                Clone and craft your own unique voices or add one from the
                marketplace
              </span>
            </div>
            <Button icon="FeatherPlus" rightIcon={null}>
              Create voice
            </Button>
          </div>
          <div className="flex w-full flex-col items-start pl-4">
            <Tabs>
              <Tabs.Item checked={true}>Your voices</Tabs.Item>
              <Tabs.Item checked={false}>Voice marketplace</Tabs.Item>
            </Tabs>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6 pt-4 pr-4 pb-4 pl-4">
          <div className="flex w-full items-start gap-4">
            <Card
              className="transition ease-in-out delay-150 hover:drop-shadow-xl duration-300"
              text="JARVIS"
              text3="Tony Stark's assistant"
              variant="Default"
            />
            <Card
              className="transition ease-in-out delay-150 hover:drop-shadow-xl duration-300"
              text="Hannah (Narrator)"
              text3="Middle-aged raspy voice"
              variant="Default"
              image="https://res.cloudinary.com/demo/image/upload/v1707458514/VoiceSignature2_viu3mn.png"
            />
            <Card
              text="Kevin Conroy"
              text3="Iconic voice of The Dark Knight"
              variant="Default"
              image="https://res.cloudinary.com/demo/image/upload/v1707461110/VoiceSignature4_m93rxm.png"
            />
          </div>
          <div className="flex w-full items-start gap-4">
            <Card
              className="transition ease-in-out delay-150 hover:drop-shadow-xl duration-300"
              text="JARVIS"
              text3="Tony Stark's assistant"
              variant="Default"
            />
            <Card
              className="transition ease-in-out delay-150 hover:drop-shadow-xl duration-300"
              text="Hannah (Narrator)"
              text3="Middle-aged raspy voice"
              variant="Default"
              image="https://res.cloudinary.com/demo/image/upload/v1707458514/VoiceSignature2_viu3mn.png"
            />
            <Card
              text="Kevin Conroy"
              text3="Iconic voice of The Dark Knight"
              variant="Default"
              image="https://res.cloudinary.com/demo/image/upload/v1707461110/VoiceSignature4_m93rxm.png"
            />
          </div>
        </div>
      </div>
    </ElevenPage>
  );
}

export default VoicesPage;
