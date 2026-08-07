import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

import { SOURCE_PARSER } from './parser.interface';
import { GoogleMapsParser } from './google-maps.parser';
import { FacebookParser } from './facebook.parser';
import { InstagramParser } from './instagram.parser';
import { TikTokParser } from './tiktok.parser';
import { YouTubeParser } from './youtube.parser';
import { LinkedInParser } from './linkedin.parser';
import { GenericParser } from './generic.parser';

/** Registra los 7 parsers de origen como multi-provider de `SOURCE_PARSER`. */
export function provideParsers(): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: SOURCE_PARSER, useClass: GoogleMapsParser, multi: true },
    { provide: SOURCE_PARSER, useClass: FacebookParser, multi: true },
    { provide: SOURCE_PARSER, useClass: InstagramParser, multi: true },
    { provide: SOURCE_PARSER, useClass: TikTokParser, multi: true },
    { provide: SOURCE_PARSER, useClass: YouTubeParser, multi: true },
    { provide: SOURCE_PARSER, useClass: LinkedInParser, multi: true },
    { provide: SOURCE_PARSER, useClass: GenericParser, multi: true },
  ]);
}
