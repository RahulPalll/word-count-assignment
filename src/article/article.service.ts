// src/article/article.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class ArticleService {
  async getWordCount(url: string): Promise<number> {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const text = $('body').text();
      const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
      return wordCount;
    } catch (error) {
      throw new Error('Failed to fetch or process the article.');
    }
  }
}


