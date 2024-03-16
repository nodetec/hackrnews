/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of HackrNews.
 *
 * HackrNews is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HackrNews is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HackrNews. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * luis..f.carvalho20+hackrnews@gmail.com
 */

"use client";

import React from "react";
import Drawer from "./comp";
import { twJoin } from "tailwind-merge";
import NestedDrawer from "./nested";

export default function Page() {
  return (
    <div>
      <Drawer>
        {({ isOpen, setIsOpen }) => (
          <>
            <Drawer.Trigger asChild>
              <button className={twJoin(isOpen && "bg-red-500")}>butt</button>
            </Drawer.Trigger>
            <Drawer.Body>
              <Drawer.Title>Drawer Title</Drawer.Title>
              <div>this is the content</div>
              <button onClick={() => setIsOpen(false)}>closes</button>

              <NestedDrawer />
            </Drawer.Body>
          </>
        )}
      </Drawer>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nam sed
      dolore, consectetur assumenda quos saepe illum dicta deserunt aspernatur
      in, itaque velit dolor cupiditate explicabo rerum animi, magni placeat
      vero dolorum laboriosam incidunt! Harum error fugit voluptas accusamus
      assumenda fuga, quam praesentium amet tempora sed magni commodi
      dignissimos distinctio delectus molestias, impedit cupiditate. Soluta
      vitae exercitationem mollitia, vero, illo perspiciatis quia doloremque
      quaerat tenetur ex autem repellendus tempora praesentium ad in vel iste.
      Eaque harum quos, ipsum aspernatur id voluptatem atque, ullam magni
      reprehenderit rerum modi debitis quidem asperiores quibusdam nulla,
      tenetur aut accusamus assumenda laboriosam. Quaerat neque minus in dolor.
      Facere vero amet accusantium nulla, fugiat ab incidunt voluptate excepturi
      quibusdam in sint eligendi atque nobis aut aliquam ullam sapiente numquam
      sed cumque animi aperiam et corrupti impedit voluptates. Autem eveniet
      dolorum sequi placeat maiores odit a sit? Assumenda nihil repellendus
      veritatis fugit quas vel, cum neque odio, officia non tempora rerum ipsam,
      aspernatur autem! Architecto similique praesentium suscipit soluta
      repudiandae cupiditate ducimus dolorum a incidunt voluptatibus, dicta et
      quisquam quae temporibus dignissimos velit ea nam amet fugit optio
      voluptate in? Vero molestias quod eum delectus ipsum, illo fugiat in
      soluta recusandae? Ab eveniet veritatis maxime alias quisquam magnam ipsa
      rerum. Eum tempore ipsum ducimus molestiae, non, voluptates a maxime qui
      iste saepe adipisci expedita velit aperiam, neque fugit hic temporibus.
      Veritatis corrupti facilis et! Mollitia alias temporibus enim dolores
      praesentium excepturi voluptatibus expedita illum optio nobis
      necessitatibus dolorem quidem asperiores labore, facilis atque ut ullam
      nostrum delectus iusto dicta nulla assumenda corporis. Reiciendis
      recusandae, minima saepe fugiat deserunt quo in. Sed optio eius deleniti,
      sunt, qui et voluptatem incidunt, quisquam inventore facere tenetur modi
      laudantium hic at. Nobis consequuntur, alias consequatur earum debitis
      autem aliquam adipisci deleniti error maxime accusamus natus dicta
      corporis! Doloremque, rem quo quidem ipsum, mollitia quos quis corrupti
      officiis, nesciunt tempora minus consequatur nulla delectus. Est qui
      voluptates iusto numquam temporibus laborum. Laboriosam at reprehenderit
      praesentium omnis, corrupti harum sint tempora sunt illum! Earum fugiat
      doloribus distinctio enim, aliquam repudiandae perspiciatis voluptatem
      sint officiis sequi? Fugiat, eius! Incidunt ipsum, aliquid, perspiciatis
      doloremque doloribus nulla quae accusantium assumenda aliquam quos
      laudantium? Debitis amet dolor pariatur nobis quod recusandae similique
      rerum tempore quis asperiores minima blanditiis iure explicabo, delectus
      deserunt adipisci nisi quisquam molestiae quasi obcaecati eius,
      perspiciatis doloremque numquam quia? Error deserunt asperiores nemo,
      consequuntur architecto quas in quibusdam obcaecati, commodi dolorum eius
      a blanditiis veniam aperiam officiis atque ipsam. Esse, deleniti dolor!
      Error ex harum quaerat ut, facilis cum? Ea optio beatae adipisci sed
      nostrum recusandae asperiores omnis excepturi distinctio quae impedit,
      ipsam maiores ducimus eveniet dolores natus sunt libero quod unde
      provident quaerat cum? Nobis voluptate exercitationem minima aperiam minus
      modi nam atque quaerat eum dolores doloremque odio deserunt fugit rerum,
      facilis voluptatem non doloribus accusamus assumenda incidunt, mollitia
      nisi. Earum laudantium illo aspernatur autem exercitationem qui possimus,
      maiores perferendis explicabo facilis obcaecati sequi eligendi nulla animi
      placeat dolor commodi nesciunt vitae similique? Optio quo corrupti quis ut
      eligendi neque dicta assumenda eveniet eum, impedit, porro quaerat magni
      distinctio dolore laudantium quisquam incidunt, in cupiditate illum
      voluptatum doloribus molestiae voluptatibus! Expedita ducimus numquam
      necessitatibus, autem rerum obcaecati quo fugit officiis dolore esse ipsum
      molestias laboriosam nemo, in placeat nisi accusantium, distinctio nobis
      quia omnis! Omnis magni non voluptates magnam, autem, tenetur incidunt
      sequi quas optio illum, blanditiis quisquam aut? Nesciunt sed itaque,
      nulla ab eaque consectetur deserunt odio magnam iste saepe mollitia
      doloremque ratione nisi tempora et veritatis non repellat voluptatum
      inventore. Nam quisquam cum numquam saepe, necessitatibus consectetur
      libero! Impedit est, suscipit quae ipsum molestiae neque architecto autem
      voluptatem odio!
    </div>
  );
}
