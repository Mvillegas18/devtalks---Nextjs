ALTER TABLE "communities" ADD COLUMN "description" text NOT NULL;--> statement-breakpoint
ALTER TABLE "communities" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "communities" ADD COLUMN "created_by" text NOT NULL;