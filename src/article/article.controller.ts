// src/article/article.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('word-count')
  async getWordCount(@Query('url') url: string): Promise<{ wordCount: number }> {
    const wordCount = await this.articleService.getWordCount(url);
    return { wordCount };
  }
}
