/* eslint-disable react/jsx-key */

import { Button } from "../../components/Button"
import { CardButton } from "../../components/CardButton"

export const ButtonPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold">Buttons</h1>
      <div className="w-[565px] flex flex-col gap-10">
        <CardButton
          components={[<Button />, <Button hover_focus={true} />]}
          texts={['<Button />', '&:hover, &:focus']}
        />

        <CardButton
          components={[<Button variant={"outline"} />, <Button variant={"outline"} hover_focus={true} />]}
          texts={['<Button variant="outline" />', '&:hover, &:focus']}
        />

        <CardButton
          components={[<Button variant={"text"} />, <Button variant={"text"} hover_focus={true} />]}
          texts={['<Button variant="text" />', '&:hover, &:focus']}
        />

        <CardButton
          components={[<Button disableShadow />]}
          texts={['<Button disableShadow />']}
        />
      </div>
      <div className="flex flex-col gap-10">
        <CardButton
          components={[<Button disable />, <Button variant={"text"} disable />]}
          texts={['<Button disabled />', '<Button variant="text" disabled />']}
        />

        <CardButton
          components={[<Button startIcon />, <Button endIcon />]}
          texts={['<Button startIcon />', '<Button endIcon />']}
        />

        <CardButton
          components={[<Button size="sm" />, <Button size="md" />, <Button size="lg" />]}
          texts={['<Button size="sm" />', '<Button size="md" />', '<Button size="lg" />']}
          columns="3"
        />

        <CardButton
          components={[<Button color="default" />, <Button text={'Primary'} color="primary" />, <Button text={'Secondary'} color="secondary" />, <Button text={'Danger'} color="danger" />]}
          texts={['<Button color="default" />', '<Button color="primary" />', '<Button color="secondary" />', '<Button color="danger" />']}
          columns="4"
        />

      </div>
    </div>
  )
}
